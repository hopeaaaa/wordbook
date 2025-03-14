import "./WordCardComponent.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function WordCardComponent() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [addedWords, setAddedWords] = useState([]);

  const fetchWordData = async () => {
    if (!word) return;
    try {
      const response = await fetch(`${URL}${word}`);
      const result = await response.json();
      setWord("");

      if (response.ok) {
        setData(result[0]);
        setError(null);
      } else {
        setData(null);
        setError("Cannot find word");
      }
    } catch (err) {
      setError("error fetching data");
      setData(null);
    }
  };

  const playSound = () => {
    if (data?.phonetics?.[0]?.audio) {
      new Audio(data.phonetics[0].audio).play();
    }
  };

  const addWord = () => {
    if (data) {
      setAddedWords([...addedWords, data]);
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
      <button className="wordcard__searchbtn" onClick={fetchWordData}>
        translate
      </button>
      {error && <p className="wordcard__search-error">{error}</p>}

      {data && (
        <>
          <h2 className="wordcard__fetchedword">{data.word}</h2>
          <p className="wordcard__phonetic">
            {data.phonetic || "No phonetic available"}
          </p>
          <button className="wordcard__soundbtn" onClick={playSound}>
            🔊 Pronunciation
          </button>
          <p>
            {data.meanings[0]?.definitions[0]?.definition ||
              "No definition available"}
          </p>
          <button className="wordcard__addbtn" onClick={addWord}>
            +
          </button>
          <button className="wordcard__clearbtn" onClick={() => setData(null)}>
            clear
          </button>
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
                  {wordData.word}
                </strong>
                : {wordData.meanings[0]?.definitions[0]?.definition}
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
