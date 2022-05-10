import { useContext } from "react";
import { Login } from "../../firebase/authentication/userDetails";
import { context } from "../../context/ContextProvider";
const LoginButton = ({ style, text, callback }) => {
  const { navigate } = useContext(context);
  return (
    <div
      style={{ ...style }}
      onClick={() => {
        Login(() => {
          callback ? callback() : navigate("/");
        });
      }}
      className="login-button"
    >
      {text || "Log in with Google"}
    </div>
  );
};
export default LoginButton;
