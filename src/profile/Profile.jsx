import "./style.css";
import {
  getUserName,
  getUserMail,
  getUserPhoto,
  Logout,
  getUserId,
} from "../firebase/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { context } from "../context/ContextProvider";
const Profile = ({ position }) => {
  const { setshowToolTip, showToolTip } = useContext(context);
  const navigate = useNavigate();
  console.log(showToolTip);

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
              <Link to={`/${getUserId()}`}>
                <div className="name">{getUserName()}</div>
                <div className="email">{getUserMail()}</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
