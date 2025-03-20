import axios from "axios";
import { useEffect, useState } from "react";
import "./UserProfileHeader.scss";

function UserProfileHeader({ userId }) {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${userId}`
        );
        setUserName(response.data.userName);
      } catch (error) {
        console.error("Error fetching user name:", error);
        setError("Failed to load user name");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserName();
    }
  }, [userId]);

  return (
    <header className="userprofile-header">
      <h1 className="userprofile__title">Wordbook</h1>
      <h2 className="userprofile__user-name-title">
        User Name: {loading ? "Loading..." : error ? error : userName}
      </h2>
    </header>
  );
}
export default UserProfileHeader;
