import "./WordCardComponent.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoundIcon from "../../assets/icons/sound.svg";

function WordCardComponent({ onSignInClick }) {
  const [word, setWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [savedWord, setSavedWord] = useState("");

  const URL = "http://localhost:5000/translate";
  const navigate = useNavigate();

  //fetch translation
  const fetchTranslation = async () => {
    if (!word) return;

    try {
      const response = await fetch(`${URL}?text=${word}&targetLang=fr`, {
        method: "GET",
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
    const word = Array.isArray(text) ? text[0] : text;
    console.log("Fetching pronunciation for:", text);

    try {
      const response = await fetch(
        `http://localhost:5000/pronunciation?text=${word}`,
        {
          method: "GET",
        }
      );

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
        const updatedWords = [newWord, ...prevWords];
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
      <hr />
      <h3 className="wordcard__title">Translator Tool</h3>

      <div className="wordcard__container">
        <h3 className="wordcard__subtitle">English to French Translator</h3>

        <div className="wordcard__input-container">
          <input
            type="text"
            placeholder="Enter a word..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="wordcard__input"
          />
          <button className="wordcard__btn" onClick={fetchTranslation}>
            Translate
          </button>
        </div>

        {error && <p className="wordcard__error">{error}</p>}

        {translatedWord && (
          <div className="wordcard__result">
            <h2 className="wordcard__translated">{translatedWord}</h2>
            {audioUrl && (
              <button className="wordcard__soundbtn" onClick={playAudio}>
                <img src={SoundIcon} alt="Sound Icon" />
              </button>
            )}
          </div>
        )}

        <button className="wordcard__addbtn" onClick={addWord}>
          Add to Word List
        </button>

        <button
          className="wordcard__clearbtn"
          onClick={() => setTranslatedWord(null)}
        >
          Reset
        </button>

        <div className="wordcard__list">
          <h4 className="wordcard__list-title">Word List</h4>
          {addedWords.length === 0 ? (
            <p className="wordcard__empty-list">No words added yet.</p>
          ) : (
            addedWords.map((wordData, index) => (
              <div className="wordcard__list-item" key={index}>
                <span className="wordcard__list-word">
                  <strong>{wordData.french}</strong> / {wordData.english}
                  <button
                    className="wordcard__removebtn"
                    onClick={() => removeWord(index)}
                  >
                    -
                  </button>
                </span>
              </div>
            ))
          )}
        </div>
        <button className="wordcard__savebtn" onClick={onSignInClick}>
          <span>Save Word List</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path
              d="M1 5L4 8L11 1"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default WordCardComponent;
