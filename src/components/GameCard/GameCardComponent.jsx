import messyKitchen from "../../assets/images/messyKitchen.svg";
import cozyKitchen1 from "../../assets/images/cozyKitchen1.svg";
import Tuath from "../../assets/audio/Tuath Dé Dunsany - Jesse Gallagher.mp3";
import "./GameCardComponent.scss";
import { useState } from "react";

function GameCardComponent() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="gamecard">
      {/*       <p className="gamecard__intro">welcome...</p> */}
      <audio className="gamecard__audioplayer" controls autoPlay muted>
        <source src={Tuath} type="audio/mpeg" />
      </audio>
      <div className="gamecard__img-container">
        <img
          src={cozyKitchen1}
          alt="beautiful illustration of a messy kitchen"
          className="gamecard__img"
        />
      </div>
      <div
        className={`gamecard__card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="gamecard__card-inner">
          <div className="gamecard__front">Apple</div>
          <div className="gamecard__back">Pomme</div>
        </div>
      </div>
      {/* <div className="gamecard__card">
        <div className="gamecard__card-inner">
          <div className="gamecard__front">apple</div>
          <div className="gamecard__back">pomme</div>
        </div>
      </div> */}
    </div>
  );
}

export default GameCardComponent;
