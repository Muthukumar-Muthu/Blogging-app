import { FaGripVertical, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from "../../../components/profile/Profile";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src="assests/logo.png" className="logo" alt="" />
      </Link>

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
