import "./UserProfileHeader.scss";

function UserProfileHeader({ userName }) {
  return (
    <header className="userprofile-header">
      <h2 className="userprofile__user-name-title">User: {userName}</h2>
      <img className="userprofile__photo" src="" alt="user profile photo" />
    </header>
  );
}
export default UserProfileHeader;
