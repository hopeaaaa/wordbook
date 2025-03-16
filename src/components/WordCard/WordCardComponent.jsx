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

      // Fetch pronunciation
      fetchPronunciation(translatedText);
    } catch (error) {
      console.error("Error fetching translation:", error);
      setError("Translation failed");
      setTranslatedWord(null);
    }
  };

  //fetch pronunciation url
  const fetchPronunciation = async (text) => {
    try {
      const response = await fetch("http://localhost:5000/get-pronunciation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error fetching pronunciation");
      }

      const data = await response.json();
      setAudioUrl(`http://localhost:5000${data.audioUrl}`);
    } catch (error) {
      console.error("Error fetching pronunciation:", error);
      setAudioUrl(null);
    }
  };

  // Play audio when button is clicked
  const playAudio = () => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play().catch((error) => console.error("Error playing audio:", error));
  };

  //adds word to list when button is clicked
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
        placeholder="enter word..."
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
          <h2 className="wordcard__fetchedword">{translatedWord}</h2>

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
        </>
      )}
      <div className="wordcard__added-words">
        {console.log(addedWords)}
        {addedWords.length === 0 ? (
          <p className="wordcard__prompt-text">Add words!</p>
        ) : (
          <div className="wordcard__fetched-card">
            {addedWords.map((wordData, index) => (
              <div className="wordcard__fetched-content" key={index}>
                <strong className="wordcard__fetched-title">
                  {wordData.english}
                </strong>
                : {wordData.french}
                <button
                  className="wordcard__removebtn"
                  onClick={() => removeWord(index)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WordCardComponent;
