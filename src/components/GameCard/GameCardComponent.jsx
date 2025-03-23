import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import kitchensg from "../../assets/images/kitchen-transparent-bg.svg";
import volumeIcon from "../../assets/icons/volume-icon.svg";
import volumeMuteIcon from "../../assets/icons/volume-mute-icon.svg";
import Song from "../../assets/audio/View of the Valley - Trevor Garrod.mp3";
import foundSound from "../../assets/audio/Wood Plank Flicks.mp3";
import "./GameCardComponent.scss";

function GameCardComponent({ onHelpClick }) {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const audioRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [foundItems, setFoundItems] = useState(new Set());
  const [foundKnives, setFoundKnives] = useState(0);

  const words = [
    { front: "Poêle", back: "Pan" },
    { front: "Couteau", back: "Knife", found: foundKnives },
    { front: "Bouilloire", back: "Kettle" },
    { front: "Tasse", back: "Cup" },
    { front: "Maryse", back: "Spatula" },
  ];

  const [flippedStates, setFlippedStates] = useState(
    Array(words.length).fill(false)
  );

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

  const handleClick = (area) => {
    console.log(`user clicked on:${area}`);

    const clickedElement = document.querySelector(`.${area}`);

    if (clickedElement) {
      clickedElement.classList.add("clicked", "found");

      const sound = new Audio(foundSound);
      sound.currentTime = 0;
      sound.play();
    }
  };

  /*   const handleClick = (area) => {
    if (foundItems.has(area)) return; 

    console.log(`User clicked on: ${area}`);

    setFoundItems((prev) => new Set(prev).add(area));

    if (area.includes("knife")) {
      setFoundKnives((prevCount) => prevCount + 1);
    }

    const clickedElement = document.querySelector(`.${area}`);
    if (clickedElement) {
      clickedElement.classList.add("found");
    }

    foundSound.play();
  }; */

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

  return (
    <section className="gamecard">
      <hr />
      <h3 className="wordcard__title">Game </h3>

      <div className="gamecard__upper-container">
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
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                backgroundImage: `url(${kitchensg})`,
                backgroundPosition: `-${mousePosition.x * 2 - 45}px -${
                  mousePosition.y * 2 - 45
                }px`,
              }}
            ></div>
          )}

          <div className="gamecard__clickable-areas-container">
            {[
              { name: "pan1", x: "430px", y: "110px" },
              { name: "pan2", x: "490px", y: "110px" },
              { name: "knife1", x: "320px", y: "390px" },
              { name: "knife2", x: "830px", y: "330px" },
              { name: "kettle1", x: "160px", y: "100px" },
              { name: "kettle2", x: "660px", y: "170px" },
              { name: "cup1", x: "260px", y: "340px" },
              { name: "cup2", x: "760px", y: "100px" },
              { name: "cup3", x: "810px", y: "300px" },
            ].map(({ name, x, y }) => (
              <div
                key={name}
                className={`clickable-area ${name}`}
                style={{ left: x, top: y }}
                onClick={() => handleClick(name)}
              ></div>
            ))}
          </div>
        </div>

        <div className="gamecard__settings-container">
          <button className="gamecard__help-btn" onClick={onHelpClick}>
            ?
          </button>
          <button onClick={toggleMute} className="gamecard__volume-btn">
            <img
              className="gamecard__volume-icons"
              src={isMuted ? volumeMuteIcon : volumeIcon}
              alt={isMuted ? "Unmute" : "Mute"}
            />
          </button>
          <audio
            className="gamecard__audioplayer"
            ref={audioRef}
            autoPlay
            muted={isMuted}
          >
            <source src={Song} type="audio/mpeg" />
          </audio>
          <button
            className="gamecard__translator-tool-btn"
            onClick={() => navigate("/translator")}
          >
            Translator Tool
          </button>
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
