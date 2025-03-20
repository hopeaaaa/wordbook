import "./UserProfileCard.scss";

function UserProfileCard({ userData }) {
  const URL = "http://localhost:5000";

  console.log("user data", userData);

  if (userData?.length === 0) {
    return <p>User has no translations saved</p>;
  }

  return (
    <section className="userprofile__section">
      <h3 className="userprofile__header">Saved Translations</h3>
      <ul className="userprofile__list">
        {userData?.map((translations, index) => {
          return (
            <li key={index}>
              <div>{translations.fr_word}</div>
              <div>{translations.en_word}</div>
              <audio controls src={`${URL}${translations.audio_url}`}></audio>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default UserProfileCard;
