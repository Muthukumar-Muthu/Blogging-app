import { useState } from "react";
import { FaIdCard } from "react-icons/fa";

import "./style.css";
import Profile from "./profile/Profile";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "red",
        cursor: "pointer",
        marginLeft: "1em",
      }}
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
    >
      {show ? <Profile /> : <FaIdCard />}
    </div>
  );
};
export default Sidebar;
