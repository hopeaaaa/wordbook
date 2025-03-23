import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../GameStartModal/GameStartModal.scss";

function GameStartModal({ onClose }) {
  const [showInstructions, setShowInstructions] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="gamestart__overlay">
      <div className="gamestart__content-container">
        <div className="gamestart__header">
          <button className="gamestart__closebtn" onClick={onClose}>
            x
          </button>
          <div className="gamestart__intro-container">
            <h2 className="gamestart__intro-title">Wordbook</h2>
            <p className="gamestart__introduction">
              word·book /ˈwərdˌbo͝ok/ <br /> <i>noun</i> <br />a reference book
              containing lists of words and meanings or other related
              information.
            </p>
          </div>
        </div>
        <div className="gamestart__lines">
          <hr />
          <hr />
        </div>
        <div className="gamestart__btn-container">
          <button className="gamestart__play-btn" onClick={onClose}>
            Play
          </button>
          <hr />

          <button
            className="gamestart__how-to-btn"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            How to Play
          </button>
          {showInstructions && (
            <div className="gamestart__instructions">
              <div className="gamestart__howtoplay-container">
                <ol className="gamestart__instructions-list">
                  <li className="gamestart__list-item">
                    Find the Objects – Look closely at the illustration to spot
                    the hidden French-labeled objects.
                  </li>
                  <li className="gamestart__list-item">
                    Click to Identify – Click on an object to check if it's one
                    of the hidden items.
                  </li>
                  <li className="gamestart__list-item">
                    Flip the Cards – Click on a card to reveal the English
                    translation of the French word.
                  </li>
                  <li className="gamestart__list-item">
                    Find all the hidden objects to win!
                  </li>
                </ol>
                <p>Have fun and test your French vocabulary!</p>
              </div>
              <div className="gamestart__credits-container">
                <p className="gamestart__credits-item">Credits</p>
                <p className="gamestart__credits-item">
                  Concept, Design and Code // Hope Akello
                </p>
                <p className="gamestart__credits-item">
                  Illustrations // Hope Akello and Taj Jamal{" "}
                  <i> (Thanks Taj!)</i>
                </p>
                <p className="gamestart__credits-item">
                  Music // Jesse Gallagher and Trevor Garrod, Youtube Audio
                  Library
                </p>
              </div>
            </div>
          )}
          <hr />

          <button
            className="gamestart__translator-btn"
            onClick={() => navigate("/translator")}
          >
            Translator Tool
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameStartModal;
