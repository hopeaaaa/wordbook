import UserProfileHeader from "../../components/UserProfileHeader/UserProfileHeader";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { useParams } from "react-router-dom";

function UserProfilePage() {
  const { userId } = useParams();

  return (
    <div>
      <UserProfileHeader userId={userId} />
      <UserProfileCard userId={userId} />
    </div>
  );
}

export default UserProfilePage;
