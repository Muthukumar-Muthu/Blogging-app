import "./style.css";
import { Login } from "../firebase/firebase-config";

import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const LandingPage = ({ setUserLogged }) => {
  const navigate = useNavigate();
  console.log("landing page");
  return (
    <div className="landing-page">
      <div
        onClick={() => {
          Login(() => {
            setUserLogged(true);
            navigate("/home");
          });
        }}
        className="login-button"
      >
        Log in with Google
      </div>
    </div>
  );
};
export default LandingPage;
