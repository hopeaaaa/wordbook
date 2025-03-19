import "../GameStartModal/GameStartModal.scss";

function GameStartModal({ onClose }) {
  return (
    <div className="gamestart__overlay">
      <div className="gamestart">
        <button className="gamestart__closebtn" onClick={onClose}>
          x
        </button>
        <p className="gamestart__title">Welcome!</p>
        <p className="gamestart__introduction">
          word·book /ˈwərdˌbo͝ok/ <br /> noun <br />a reference book containing
          lists of words and meanings or other related information.
        </p>
        <button className="gamestartmodal__how-to-btn">How to play</button>
        <button className="gamestartmodal__translator-btn">
          Translator Tool
        </button>
      </div>
    </div>
  );
}

export default GameStartModal;
