import { useRef, useState } from "react";
import kitchensg from "../../assets/images/kitchensg.svg";
import volumeIcon from "../../assets/icons/volume-icon.svg";
import volumeMuteIcon from "../../assets/icons/volume-mute-icon.svg";
import Tuath from "../../assets/audio/Tuath Dé Dunsany - Jesse Gallagher.mp3";
import "./GameCardComponent.scss";

function GameCardComponent({ onHelpClick }) {
  const imgRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const words = [
    { front: "Poêle", back: "Pan" },
    { front: "Couteau", back: "Knife" },
    { front: "Bouilloire", back: "Kettle" },
    { front: "Tasse", back: "Cup" },
    { front: "Maryse", back: "Spatula" },
  ];

  const [flippedStates, setFlippedStates] = useState(
    Array(words.length).fill(false)
  );

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isMuted) {
        audio.muted = false;
        audio.play();
      } else {
        audio.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  const handleFlip = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const handleMouseMove = (e) => {
    const imgRect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;
    setMousePosition({ x, y });
  };

  return (
    <section className="gamecard">
      <div className="gamecard__upper-container">
        <button className="gamecard__help-btn" onClick={onHelpClick}>
          ?
        </button>
        <div className="gamecard__audio-controls">
          <button onClick={toggleMute} className="gamecard__volume-btn">
            <img
              className="gamecard__volume-icons"
              src={isMuted ? volumeMuteIcon : volumeIcon}
              alt={isMuted ? "Unmute" : "Mute"}
            />
          </button>
        </div>
        <audio
          className="gamecard__audioplayer"
          ref={audioRef}
          autoPlay
          muted={isMuted}
        >
          <source src={Tuath} type="audio/mpeg" />
        </audio>
        <div
          className="gamecard__img-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
          <img
            ref={imgRef}
            src={kitchensg}
            alt="beautiful illustration of a messy kitchen"
            className="gamecard__img"
          />
          {showMagnifier && (
            <div
              className="gamecard__magnifyingglass"
              style={{
                left: `${mousePosition.x - 75}px`,
                top: `${mousePosition.y - 75}px`,
                backgroundImage: `url(${kitchensg})`,
                backgroundPosition: `-${mousePosition.x}px -${mousePosition.y}px`,
              }}
            ></div>
          )}
        </div>
      </div>
      <div className="gamecard__cards-container">
        {words.map((words, index) => (
          <div
            key={index}
            className={`gamecard__card ${
              flippedStates[index] ? "flipped" : ""
            }`}
            onClick={() => handleFlip(index)}
          >
            <div className="gamecard__card-inner">
              <div className="gamecard__front">{words.front}</div>
              <div className="gamecard__back">{words.back}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameCardComponent;
