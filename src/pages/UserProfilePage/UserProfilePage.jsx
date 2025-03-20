import axios from "axios";
import { useEffect, useState } from "react";

function UserProfilePage() {
  const [translations, setTranslations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [updatedTranslation, setUpdatedTranslation] = useState("");
  const [updatedPronunciation, setUpdatedPronunciation] = useState("");

  // Fetch saved translations
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/translations/${userId}`)
      .then((response) => {
        setTranslations(response.data);
      })
      .catch((error) => console.error("Error fetching translations:", error));
  }, [userId]);

  // Update a translation
  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:5000/api/translations/${id}`, {
        translation: updatedTranslation,
        pronunciation: updatedPronunciation,
      })
      .then(() => {
        setTranslations(
          translations.map((t) =>
            t.id === id
              ? {
                  ...t,
                  translation: updatedTranslation,
                  pronunciation: updatedPronunciation,
                }
              : t
          )
        );
        setEditing(null);
      })
      .catch((error) => console.error("Error updating translation:", error));
  };

  return (
    <section className="userprofile">
      <h2 className="userprofile__user-name-title">User Name: hope</h2>
      <h3 className="userprofile__saved-translations-title">
        Saved Translations
      </h3>
      <ul className="userprofile__list">
        {translations.map((t) => (
          <li key={t.id}>
            {editing === t.id ? (
              <>
                <input
                  type="text"
                  value={updatedTranslation}
                  onChange={(e) => setUpdatedTranslation(e.target.value)}
                  placeholder="New translation"
                />
                <input
                  type="text"
                  value={updatedPronunciation}
                  onChange={(e) => setUpdatedPronunciation(e.target.value)}
                  placeholder="New pronunciation"
                />
                <button onClick={() => handleUpdate(t.id)}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>
                  {t.translation} ({t.pronunciation})
                </span>
                <button
                  onClick={() => {
                    setEditing(t.id);
                    setUpdatedTranslation(t.translation);
                    setUpdatedPronunciation(t.pronunciation);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserProfilePage;
