import "./style.css";
import { Login } from "../../firebase/authentication/userDetails";

import { useNavigate } from "react-router-dom";
import LoginButton from "../../components/login-button/LoginButton";

const LandingPage = () => {
  const navigate = useNavigate();
  console.log("landing page");
  return (
    <div className="landing-page">
      <LoginButton />
    </div>
  );
};
export default LandingPage;
