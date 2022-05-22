import { useContext, useEffect } from "react";
import { context } from "../../context/ContextProvider";

import "./style.css";
import Header from "./header/Header";
import { getUserName } from "../../firebase/authentication/userDetails";
import Body from "./body/Body";

const ProfilePage = () => {
  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = `Blogger | ${getUserName()}`;
  }, []);
  const { closeProfileToolTip } = useContext(context);

  return (
    <div className="profile-page" onClick={closeProfileToolTip}>
      <Header />
      <Body />
    </div>
  );
};
export default ProfilePage;
