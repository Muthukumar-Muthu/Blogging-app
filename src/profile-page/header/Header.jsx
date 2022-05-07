import { FaGripVertical, FaBell } from "react-icons/fa";

import Profile from "../../profile/Profile";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <img src="assests/logo.png" className="logo" alt="" />

      <FaGripVertical
        className="icon"
        style={{
          marginLeft: "auto",
        }}
      />
      <FaBell className="icon" />
      <div className="center">
        <Profile position={"bottom"} />
      </div>
    </header>
  );
};
export default Header;
