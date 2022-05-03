import "./style.css";
import {
  getUserName,
  getUserMail,
  getUserPhoto,
  Logout,
} from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { context } from "../context/ContextProvider";
const Profile = ({ position }) => {
  console.log("profile");
  const { setshowToolTip, showToolTip } = useContext(context);
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
        <div className={` profile-tooltip ${position || "right"}`}>
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
