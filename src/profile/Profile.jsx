import "./style.css";

const Profile = ({ showToolTip, setshowToolTip }) => {
  return (
    <div className="profile">
      <img
        onMouseEnter={() => {
          setshowToolTip(true);
        }}
        onClick={() => {
          setshowToolTip(true);
        }}
        className="user-photo"
        src="assests/user-photo.png"
        alt=""
      />
      {showToolTip && (
        <div className="profile-tooltip">
          <div>Sign out</div>
          <div>Stats</div>
          <div>Settings</div>
          <div className="user-info">
            <img className="user-photo" src="assests/user-photo.png" alt="" />
            <div>
              <div className="name">Muthu Kumar</div>
              <div className="email">m.m.muthu1388@gmail.com</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
