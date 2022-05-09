import { Link } from "react-router-dom";

import "./style.css";
import {
  getUserPhoto,
  getUserId,
  getUserName,
} from "../../../firebase/authentication/userDetails";
import Bio from "./Bio";

const Body = () => {
  let domain = window.location.hostname;

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
            value={"Muthukumar M"}
          />
        </div>
      </div>
      <Bio />

      <div className="flex-row">
        <div className="left">
          <h3>Photo</h3>
          <div className="user-image">
            <img src={getUserPhoto()} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3>Username & URL</h3>
        <div>
          <div className="user-name">
            <h3>Username</h3>
            <span>{getUserName()}</span>
          </div>
          <div className="url">
            <h3>Profile URL</h3>
            <span>
              <Link
                style={{
                  textDecoration: "underline",
                  fontSize: "medium",
                  fontWeight: "normal",
                }}
                target={"_blank"}
                to={`/user/${getUserId()}`}
              >
                {`${domain}/user/${getUserId()}`}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
