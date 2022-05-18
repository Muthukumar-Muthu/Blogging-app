import { createContext, useRef, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";
const context = createContext(null);
const ContextProvider = ({ children }) => {
  const [showToolTip, setshowToolTip] = useState(false);
  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();

  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
  }

  return (
    <context.Provider
      value={{
        closeProfileToolTip,
        showToolTip,
        setshowToolTip,
        user,
        setUser,

        navigate,
      }}
    >
      {children}
    </context.Provider>
  );
};
export { ContextProvider, context };
