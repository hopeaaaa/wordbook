import "./UserProfileCard.scss";
import SoundIcon from "../../assets/icons/sound.svg";
import Waldo from "../../assets/images/wheres-waldo-logo.avif";

function UserProfileCard({ userData, userName }) {
  const URL = "http://localhost:5000";
  /* console.log("user data", userData); */

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  if (userData?.length === 0) {
    return <p>User has no translations saved</p>;
  }

  return (
    <section className="userprofile">
      <hr />
      <h3 className="userprofile__subheader">Saved Translations</h3>
      <div className="userprofile__container">
        <h3 className="userprofile__header">
          <img
            src={Waldo}
            alt="profile pic of Waldo"
            className="userprofile__profilepic"
          />
          {userName}'s Word List
        </h3>

        <ul className="userprofile__list">
          {userData?.map((translations, index) => (
            <li key={index} className="userprofile__list-item">
              <div className="userprofile__list-container">
                <div className="userprofile__word">
                  <strong>{translations.fr_word}</strong> /{" "}
                  {translations.en_word}
                  <button
                    className="userprofile__soundbtn"
                    onClick={() => playAudio(`${URL}${translations.audio_url}`)}
                  >
                    <img src={SoundIcon} alt="Play pronunciation" />
                  </button>
                </div>
                <button
                  className="userprofile__removebtn"
                  onClick={() => removeWord(index)}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button className="userprofile__btn userprofile__btn--add">
            Edit Saved Translations
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserProfileCard;
