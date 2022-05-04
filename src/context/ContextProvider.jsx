import { createContext, useState } from "react";

const context = createContext(null);
const ContextProvider = ({ children }) => {
  const [showToolTip, setshowToolTip] = useState(false);
  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }

  return (
    <context.Provider
      value={{
        closeProfileToolTip,
        showToolTip,
        setshowToolTip,
      }}
    >
      {children}
    </context.Provider>
  );
};
export { ContextProvider, context };
