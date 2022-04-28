import "./style.css";
import { Login } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const LandingPage = ({ setUserLogged, setUserObj }) => {
  //console.log("Landing Page");
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div
        onClick={() => {
          Login(() => {
            navigate("/home");
            setUserLogged(true);
            setUserObj(getAuth().currentUser);
            //console.log("navigating to home");
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
