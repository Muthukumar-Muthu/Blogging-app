import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { context } from "../context/ContextProvider";

import "./style.css";
import Header from "./header/Header";
import { getUserName } from "../firebase/firebase-config";
import Body from "./body/Body";
const ProfilePage = () => {
  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = `Blogger | ${getUserName()}`;
  }, []);
  const { closeProfileToolTip } = useContext(context);
  const { userId } = useParams();
  return (
    <div className="profile-page" onClick={closeProfileToolTip}>
      <Header />
      <Body />
    </div>
  );
};
export default ProfilePage;
