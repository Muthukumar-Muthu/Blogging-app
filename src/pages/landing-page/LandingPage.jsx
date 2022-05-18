import "./style.css";

import LoginButton from "../../components/login-button/LoginButton";
// import OnLogin from "../../components/on-login/OnLogin";

const LandingPage = () => {
  console.log("landing page");
  return (
    <div className="landing-page">
      <LoginButton />
    </div>
  );
};
export default LandingPage;
