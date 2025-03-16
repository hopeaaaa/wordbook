import "./WordCardComponent.scss";
import { useState } from "react";
/* import responsiveVoice from "responsivevoice"; */

/* const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"; */
const URL = "http://localhost:5000/translate";

function WordCardComponent() {
  /*   const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]); */

  /*   const speakFrench = () => {
    responsiveVoice.speak("Bonjour, comment ça va?", "French Female");
  }; */

  const [word, setWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]);

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

      if (response.ok) {
        setTranslatedWord(result.translation);
        setError(null);
      } else {
        setTranslatedWord(null);
        setError("Cannot translate");
      }
    } catch (err) {
      setError("error fetching data");
      setTranslatedWord(null);
    }
  };

  /*  const playSound = () => {
    if (data?.phonetics?.[0]?.audio) {
      new Audio(data.phonetics[0].audio).play();
    }
  }; */

  const addWord = () => {
    if (translatedWord) {
      setAddedWords([
        ...addedWords,
        { english: word, french: translationWord },
      ]);
    }
  };

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

      {data && (
        <>
          <h2 className="wordcard__fetchedword">{translatedWord}</h2>

          <button className="wordcard__addbtn" onClick={addWord}>
            +
          </button>
          <button className="wordcard__clearbtn" onClick={() => setTr(null)}>
            clear
          </button>

          {/*  <button onClick={speakFrench}>Speak French</button> */}
        </>
      )}
      <div className="wordcard__added-words">
        {/*  <h3>Added Words:</h3> */}
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
        {/*         <script src="https://code.responsivevoice.org/responsivevoice.js?key=4JNiWArX"></script> */}
      </div>
    </section>
  );
}

export default WordCardComponent;
