import { createContext, useState } from "react";
// import ReactHtmlParser from "react-html-parser";

const context = createContext(null);
const ContextProvider = ({ children }) => {
  const [showToolTip, setshowToolTip] = useState(false);
  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }
  // function toHtml() {
  //   console.log(ReactHtmlParser(`<p>hi</p>`));
  // }
  // toHtml();
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
