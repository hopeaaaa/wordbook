import kitchensg from "../../assets/images/kitchensg.svg";
import Tuath from "../../assets/audio/Tuath Dé Dunsany - Jesse Gallagher.mp3";
import "./GameCardComponent.scss";
import { useRef, useState } from "react";

function GameCardComponent() {
  const imgRef = useRef(null);
  /*   const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 }); */
  const [flipped, setFlipped] = useState(false);

  /*   const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartPosition({
      x: e.clientX - initialPosition.x,
      y: e.clientY - initialPosition.y,
    });
    imgRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStartPosition.x;
    const newY = e.clientY - dragStartPosition.y;
    setInitialPosition({ x: newX, y: newY });
    imgRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
  }; */

  /* const handleMouseUp = () => {
    setIsDragging(false);
    imgRef.current.style.cursor = "grab";
  }; */

  return (
    <div className="gamecard">
      {/*       <p className="gamecard__intro">welcome...</p> */}
      <audio className="gamecard__audioplayer" controls autoPlay muted>
        <source src={Tuath} type="audio/mpeg" />
      </audio>
      <div className="gamecard__img-container">
        <img
          ref={imgRef}
          src={kitchensg}
          alt="beautiful illustration of a messy kitchen"
          className="gamecard__img"
          /*       onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} */
        />
      </div>
      <div
        className={`gamecard__card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="gamecard__card-inner">
          <div className="gamecard__front">Pomme</div>
          <div className="gamecard__back">Apple</div>
        </div>
        {/*        <div className="gamecard__card-inner">
          <div className="gamecard__front">1</div>
          <div className="gamecard__back">2</div>
        </div> */}
      </div>
    </div>
  );
}

export default GameCardComponent;
