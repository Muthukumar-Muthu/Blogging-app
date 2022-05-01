import "./style.css";
import {
  getUserName,
  getUserMail,
  getUserPhoto,
} from "../firebase/firebase-config";
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
        src={getUserPhoto()}
        alt=""
      />
      {showToolTip && (
        <div className="profile-tooltip">
          <div>Sign out</div>
          <div>Stats</div>
          <div>Settings</div>
          <div className="user-info">
            <img className="user-photo" src={getUserPhoto()} alt="" />
            <div>
              <div className="name">{getUserName()}</div>
              <div className="email">{getUserMail()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
