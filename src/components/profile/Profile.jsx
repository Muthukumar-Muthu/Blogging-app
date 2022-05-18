import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./style.css";
import {
  getUserName,
  getUserMail,
  getUserPhoto,
  Logout,
} from "../../firebase/authentication/userDetails";
import { context } from "../../context/ContextProvider";
import LoginButton from "../login-button/LoginButton";
const Profile = ({ position }) => {
  const { setshowToolTip, showToolTip, user, locationRef } =
    useContext(context);
  const navigate = useNavigate();
  return (
    <div
      className="profile"
      onMouseEnter={() => {
        setshowToolTip(true);
      }}
      onClick={() => {
        setshowToolTip(true);
      }}
    >
      <img className="user-photo" src={getUserPhoto()} alt="" />
      {showToolTip && (
        <div className={` profile-tooltip ${position || "right"}`}>
          {user ? (
            <>
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
                <Link
                  style={{
                    display: "flex",

                    justifyContent: "center",
                  }}
                  to={`/profile`}
                >
                  <img className="user-photo" src={getUserPhoto()} alt="" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="name">{getUserName()}</div>
                    <div className="email">{getUserMail()}</div>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <LoginButton
              text={"Login"}
              style={{
                padding: "0.8em 1em",
                fontSize: "medium",
                display: "block",
              }}
              callback={() => navigate(locationRef.current)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Profile;
