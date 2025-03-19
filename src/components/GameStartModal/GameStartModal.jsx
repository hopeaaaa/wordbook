function GameStartModal() {
  return (
    <div className="gamestart">
      <p className="gamestart__title">Welcome!</p>
      <button className="gamestart__closebtn">x</button>
      <p className="gamestart__introduction">cozy game!</p>
      <button className="gamestartmodal__how-to-btn">How to play</button>
      <button className="gamestartmodal__translator-btn">Translator</button>
    </div>
  );
}

export default GameStartModal;
