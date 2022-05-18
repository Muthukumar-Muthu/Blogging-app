import { Login } from "../../firebase/authentication/userDetails";
import IsUserPersented from "../../firebase/functions/IsUserPresented";
import { useNavigate } from "react-router-dom";
const LoginButton = ({ style, text, callback, pathname = "/" }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ ...style }}
      onClick={() => {
        Login(() => {
          IsUserPersented(pathname)
            .then((bool) => {
              if (bool) {
                navigate(pathname);
              } else navigate("/usernotsinged");
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }}
      className="login-button"
    >
      {text || "Log in with Google"}
    </div>
  );
};
export default LoginButton;
