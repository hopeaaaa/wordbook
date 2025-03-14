import messyKitchen from "../../assets/images/messyKitchen.svg";
import cozyKitchen1 from "../../assets/images/cozyKitchen1.svg";
import Tuath from "../../assets/audio/Tuath Dé Dunsany - Jesse Gallagher.mp3";
import "./GamePage.scss";

function GamePage() {
  return (
    <div className="gamepage">
      <p className="gamepage__introduction">welcome...</p>
      <div className="gamepage__img-container">
        <img
          src={cozyKitchen1}
          alt="beautiful illustration of a messy kitchen"
          className="gamepage__img"
        />
        <audio className="gamepage__audio" controls autoPlay muted>
          <source src={Tuath} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default GamePage;
