import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { db } from "../../firebase/configuration/firebase-config";
import breakPath from "../../functions/breakPath";
import { timeStampToDate } from "../../functions/timeStampToDate";

const Author = () => {
  const [userDetails, setUserDetails] = useState({});
  const [lastLogin, setLastLogin] = useState("");
  const location = useLocation();
  const { userId } = breakPath(location.pathname);
  const domain = window.location.hostname;
  useEffect(() => {
    getUserDetails();
    timeStampToDate(userDetails.lastLogin)
      .then((string) => setLastLogin(string))
      .catch((error) => console.warn(error));
  }, []);

  async function getUserDetails() {
    try {
      const user = await getDoc(doc(db, `users/${userId}/`));

      setUserDetails(user.data());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="author">
      <div>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Author of this Blog
        </h2>
        <div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              marginBottom: "2em",
            }}
          >
            <img
              style={{
                backgroundColor: "lightgrey",
              }}
              src={`${userDetails.photoUrl}` || "/assests/user-photo.png"}
              alt=""
            />
          </div>
          <div className="author-details">
            <div>
              <h3>Name :</h3> <span>{userDetails.name}</span>
            </div>
            <div>
              <h3>Last Login :</h3>
              <span>{lastLogin || "Loading"}</span>
            </div>
            <div>
              <h3>Bio : </h3>
              <span>{userDetails.bio || "Loading"}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBlock: "1em",
              }}
            >
              <h3
                style={{
                  marginBlock: "0.5em",
                }}
              >
                User profile link:
              </h3>
              <span>
                {
                  <Link
                    style={{
                      textDecoration: "underline",
                      fontSize: "medium",
                      fontWeight: "normal",
                    }}
                    target={"_blank"}
                    to={`/user/${userId}`}
                  >
                    {`${domain}/user/${userId}`}
                  </Link>
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Author;
