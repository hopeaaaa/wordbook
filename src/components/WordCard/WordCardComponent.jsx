import "./WordCardComponent.scss";
import { useState } from "react";

const URL = "http://localhost:5000/translate";
const audioUrl = "http://localhost:5000/public/frenchPronunciation.mp3";

function WordCardComponent() {
  const [word, setWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);

  //adds word to list
  const addWord = () => {
    if (translatedWord) {
      setAddedWords([...addedWords, { english: word, french: translatedWord }]);
    }
  };

  //removes word from list
  const removeWord = (index) => {
    setAddedWords(addedWords.filter((_, i) => i !== index));
  };

  //fetch translation and pronunciation
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
      setError(null);

      // Fetch pronunciation
      playAudio(translatedText);
    } catch (error) {
      console.error("Error fetching translation:", error);
      setError("Translation failed");
      setTranslatedWord(null);
    }
  };

  const playAudio = async (text) => {
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

      /*       const data = await response.json();
      const audioUrl = http://localhost:5000${data.audioUrl};
      console.log("Playing audio:", audioUrl); */

      const audio = new Audio(audioUrl);
      await audio.play();
    } catch (error) {
      console.error("Error fetching pronunciation:", error);
    }
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
