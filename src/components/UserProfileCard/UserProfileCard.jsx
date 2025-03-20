import axios from "axios";
import { useEffect, useState } from "react";
import "./UserProfileCard.scss";

function UserProfileCard({ userId }) {
  const [translations, setTranslations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [updatedTranslation, setUpdatedTranslation] = useState("");
  const [updatedPronunciation, setUpdatedPronunciation] = useState("");
  const [loading, setLoading] = useState(true);
  const URL = "http://localhost:5000/translations";

  ///load saved translations
  useEffect(() => {
    const loadSavedTranslations = async () => {
      try {
        const response = await axios.get(`${URL}/${userId}`);
        setTranslations(response.data);
      } catch (error) {
        console.log("error fetching saved translations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      loadSavedTranslations();
    }
  }, [userId]);

  if (loading) {
    return <p>Word Up Yo! Still loading...</p>;
  }

  // Update a translation
  const handleUpdate = async (id) => {
    try {
      await axios.put(`${URL}/${id}`, {
        translation: updatedTranslation,
        pronunciation: updatedPronunciation,
      });
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

      /*   setTranslations((prevTranslations) =>
        prevTranslations.map((t) =>
          t.id === id
            ? { ...t, translation: updatedTranslation, pronunciation: updatedPronunciation }
            : t
        )
      ); */

      setEditing(null);
    } catch (error) {
      console.error("error updating translation:", error);
    }
  };

  if (translations.length === 0) {
    return <p>User has no translations saved</p>;
  }

  return (
    <section className="userprofile__section">
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

export default UserProfileCard;
