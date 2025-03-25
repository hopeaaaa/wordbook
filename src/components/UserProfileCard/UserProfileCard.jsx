import "./UserProfileCard.scss";

function UserProfileCard({ userData }) {
  const URL = "https://wordbook-m6md.onrender.com";

  console.log("user data", userData);

  if (userData?.length === 0) {
    return <p>User has no translations saved</p>;
  }

  return (
    <section className="userprofile__section">
      <h3 className="userprofile__header">Saved Translations</h3>
      <button className="userprofile__edit-list-btn">Add to List</button>
      <ul className="userprofile__list">
        {userData?.map((translations, index) => {
          return (
            <li key={index}>
              <div>{translations.fr_word}</div>
              <div>{translations.en_word}</div>
              <audio controls src={`${URL}${translations.audio_url}`}></audio>
              <button>remove</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default UserProfileCard;
