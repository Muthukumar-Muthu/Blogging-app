import { Link } from "react-router-dom";
import { useState, useEffect } from "react/";
import "./style.css";
import {
  getUserPhoto,
  getUserId,
  getUserName,
} from "../../../firebase/authentication/userDetails";
import Bio from "./Bio";
import getUserDetail from "../../../firebase/function/getUserDetail";

const Body = () => {
  let domain = window.location.hostname;
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    getUserDetail(getUserId())
      .then((reponseObj) => setUserDetail(reponseObj))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="body">
      <h2>About You</h2>
      <div className="flex-row">
        <div className="left">
          <h3>Name</h3>
          <input
            readOnly
            spellCheck="false"
            type="text"
            value={userDetail.name}
          />
        </div>
      </div>
      <Bio />

      <div className="flex-row">
        <div className="left">
          <h3>Photo</h3>
          <div className="user-image">
            <img src={userDetail.photoUrl} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3>Username & URL</h3>
        <div>
          <div className="user-name">
            <h3>Username</h3>
            <span>{userDetail.name}</span>
          </div>
          <div className="url">
            <h3>Profile URL</h3>
            <span>
              <Link
                style={{
                  textDecoration: "underline",
                  fontSize: "small",
                  fontWeight: "normal",
                }}
                target={"_blank"}
                to={`/user/${userDetail.userId}`}
              >
                {`/user/${userDetail.userId}`}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};
export default Body;
