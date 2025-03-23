import "./UserProfileHeader.scss";

function UserProfileHeader({ userName }) {
  return (
    <header className="userprofile-header">
      <hr />
      <div className="userprofile-container">
        <h2 className="userprofile__user-name-title">User: {userName}</h2>
        {/* <img className="userprofile__photo" src="" alt="user profile photo" /> */}
        <div className="vl"></div>
      </div>
      <hr />
    </header>
  );
}
export default UserProfileHeader;
