import "./style.css";
import { Login, Logout, auth } from "../firebase/firebase-config";

const LandingPage = () => {
  console.log("Landing Page");

  return (
    <div className="landing-page">
      <div onClick={Login} className="login-button">
        Log in with Google
      </div>
    </div>
  );
};
export default LandingPage;
