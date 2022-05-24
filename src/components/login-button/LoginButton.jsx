import { useContext } from "react";
import { Login } from "../../firebase/authentication/userDetails";
import { context } from "../../context/ContextProvider";
import { getUserDetails } from "../../firebase/firestore/getUserDetails";
const LoginButton = ({ style, text, callback }) => {
  const { navigate } = useContext(context);
  return (
    <div
      style={{ ...style }}
      onClick={() => {
        Login(() => {
          callback ? callback() : defaultCallback(navigate);
        });
      }}
      className="login-google"
    >
      {text || "Log in with Google"}
    </div>
  );
};
export default LoginButton;

function defaultCallback(navigate) {
  getUserDetails("userProfileCompleted").then((isCompleted) => {
    if (isCompleted) navigate("/");
    else {
      navigate("/userprofilenotcompleted");
    }
  });
}
