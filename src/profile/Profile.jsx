import "./style.css";
import {
  getUserName,
  getUserMail,
  getUserPhoto,
  Logout,
} from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
const Profile = ({ showToolTip, setshowToolTip, setUserLogged }) => {
  console.log("profile");

  const navigate = useNavigate();
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
          <div
            onClick={() => {
              Logout(() => {
                navigate("/login");
              });
            }}
          >
            Sign out
          </div>
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
