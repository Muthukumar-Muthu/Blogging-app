import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/configuration/firebase-config";

import "./style.css";
const UserProfile = () => {
  const { uid } = useParams();

  const [userDetail, setuserDetail] = useState(null);
  async function getUserDetail() {
    try {
      const userDetailObj = await getDoc(doc(db, `users/${uid}/`));
      const userDetail = userDetailObj.data();
      setuserDetail(userDetail);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getUserDetail();
  }, []);
  return (
    <div>
      {userDetail ? (
        <div className="body">
          <h2>About {userDetail.name}</h2>
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
          <div
            style={{
              borderBottom: "thin solid lightgrey",
            }}
          >
            <h3>Short Bio</h3>
            <p className="input" spellCheck="false">
              {userDetail.bio}
            </p>
          </div>

          <div className="flex-row">
            <div className="left">
              <h3>Photo</h3>
              <div className="user-image">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  src={userDetail.photoUrl}
                  alt=""
                />
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
                      color: "black",
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
            <Link
              style={{
                color: "black",
              }}
              to={"/"}
            >
              Home
            </Link>
          </button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default UserProfile;
