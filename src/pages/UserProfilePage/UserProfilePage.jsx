import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfileHeader from "../../components/UserProfileHeader/UserProfileHeader";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";

function UserProfilePage() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const URL = "http://localhost:5000/users";

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log(userId);
      try {
        const response = await axios.get(`${URL}/${userId}`);
        setUserData(response.data);
        setUserName(response.data[0].user_name);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  if (!userData) {
    return <p>Loading user profile...</p>;
  }
  console.log(userData);

  return (
    <div>
      <UserProfileHeader userName={userName} />
      <UserProfileCard userData={userData} />
    </div>
  );
}

export default UserProfilePage;
