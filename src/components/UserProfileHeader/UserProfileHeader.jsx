import "./UserProfileHeader.scss";

function UserProfileHeader({ userName }) {
  return (
    <header className="userprofile-header">
      <hr />
      <div className="userprofile-container">
        <h3 className="userprofile__title">Saved Translations</h3>
        <div className="vl"></div>
      </div>
      <hr />
    </header>
  );
}
export default UserProfileHeader;
