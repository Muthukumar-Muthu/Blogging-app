import "./style.css";
import { Login } from "../firebase/firebase-config";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  console.log("landing page");
  return (
    <div className="landing-page">
      <div
        onClick={() => {
          Login(() => {
            navigate("/");
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
