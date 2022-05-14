import { createContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const context = createContext(null);
const ContextProvider = ({ children }) => {
  const [showToolTip, setshowToolTip] = useState(false);
  const [user, setUser] = useState(false);

  const locationRef = useRef("/login");
  const navigate = useNavigate();
  let location = useLocation();
  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }
  function startUp() {
    locationRef.current = location.pathname;
  }
  return (
    <context.Provider
      value={{
        closeProfileToolTip,
        showToolTip,
        setshowToolTip,
        user,
        setUser,
        locationRef,
        startUp,
        navigate,
      }}
    >
      {children}
    </context.Provider>
  );
};
export { ContextProvider, context };
