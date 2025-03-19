import "./WordCardComponent.scss";
import { useState } from "react";

function WordCardComponent() {
  const [word, setWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [savedWord, setSavedWord] = useState("");

  const URL = "http://localhost:5000/translate";

  //fetch translation
  const fetchTranslation = async () => {
    if (!word) return;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: word, targetLang: "fr" }),
      });

      const result = await response.json();
      setWord("");

      if (!response.ok) {
        setTranslatedWord(null);
        setError("Cannot translate");
        return;
      }

      const translatedText = result.translation;
      setTranslatedWord(translatedText);
      setSavedWord(word);
      setError(null);

      //fetch pronunciation
      console.log("translatedText before fetch:", translatedText);
      fetchPronunciation(translatedText);
    } catch (error) {
      console.error("Error fetching translation:", error);
      setError("Translation failed");
      setTranslatedWord(null);
    }
  };

  //fetch pronunciation url
  const fetchPronunciation = async (text) => {
    /*   if (!text || typeof text !== "string") {
      console.error("Invalid text provided:", text);
      return;
    } */

    const word = Array.isArray(text) ? text[0] : text;
    console.log("Fetching pronunciation for:", text);

    try {
      const response = await fetch("http://localhost:5000/get-pronunciation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        /* body: JSON.stringify({ text: text.trim() }), */
        body: JSON.stringify({ text: word }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error fetching pronunciation");
      }

      const data = await response.json();
      console.log("data:", data);

      setAudioUrl(data.audioUrl);
    } catch (error) {
      console.error("Error fetching pronunciation:", error);
      setAudioUrl(null);
    }
  };

  // play audio when button is clicked
  const playAudio = () => {
    if (!audioUrl) {
      console.error("no audio URL found");
      return;
    }

    console.log("playing audio from URL:", audioUrl);
    const audio = new Audio(audioUrl);
    audio.play().catch((error) => console.error("Error playing audio:", error));
  };

  //add word to list when button is clicked
  const addWord = () => {
    if (savedWord && translatedWord) {
      const newWord = { english: savedWord, french: translatedWord };
      setAddedWords((prevWords) => {
        const updatedWords = [...prevWords, newWord];
        return updatedWords;
      });
      setSavedWord("");
      setWord("");
    }
  };

  //removes word from list
  const removeWord = (index) => {
    setAddedWords(addedWords.filter((_, i) => i !== index));
  };

  return (
    <section className="wordcard">
      <input
        type="text"
        placeholder="enter a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="wordcard__search-input"
      />
      <button className="wordcard__searchbtn" onClick={fetchTranslation}>
        translate
      </button>
      {error && <p className="wordcard__search-error">{error}</p>}

      {translatedWord && (
        <>
          <h2 className="wordcard__fetchedtitle">{translatedWord}</h2>
          <div className="wordcard__btn-container">
            {audioUrl && (
              <button className="wordcard__soundbtn" onClick={playAudio}>
                🔊 Pronunciation
              </button>
            )}
            <button className="wordcard__addbtn" onClick={addWord}>
              +
            </button>
            <button
              className="wordcard__clearbtn"
              onClick={() => setTranslatedWord(null)}
            >
              clear
            </button>
          </div>
        </>
      )}
      <p className="wordcard__wordlist-title">Your Word List</p>
      <hr />
      <div className="wordcard__added-words-container">
        {console.log(addedWords)}
        {addedWords.length === 0 ? (
          <p className="wordcard__add-words-prompt">Add words!</p>
        ) : (
          <div className="wordcard__fetched-card">
            {addedWords.map((wordData, index) => (
              <div className="wordcard__fetched-content" key={index}>
                <button
                  className="wordcard__removebtn"
                  onClick={() => removeWord(index)}
                >
                  -
                </button>{" "}
                <br />
                <strong className="wordcard__fetched-title">
                  {wordData.french}
                </strong>{" "}
                / {wordData.english}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WordCardComponent;
