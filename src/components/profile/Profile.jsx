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
const Profile = ({ position }) => {
  const { setshowToolTip, showToolTip } = useContext(context);
  const navigate = useNavigate();
  console.log(showToolTip);

  return (
    <div
      className="profile"
      onMouseEnter={() => {
        setshowToolTip(true);
        console.log("hover");
      }}
      onClick={() => {
        setshowToolTip(true);
      }}
    >
      <img className="user-photo" src={getUserPhoto()} alt="" />
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
        </div>
      )}
    </div>
  );
};
export default Profile;
