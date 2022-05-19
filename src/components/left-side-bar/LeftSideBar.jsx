import {
  FaHome,
  FaBell,
  FaSave,
  FaDraftingCompass,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from "../profile/Profile";
import ToolTip from "../../hoc/tool-tip/ToolTip";
import "./style.css";
const LeftSideBar = () => {
  return (
    <div className="leftsidebar">
      <Link to={"/"}>
        <img className="logo" src="\assests\logo.png" alt="blogger-logo" />
      </Link>
      <div className="icons">
        <Link to={"/"}>
          <ToolTip Children={FaHome} text={"Home"} />
        </Link>
        <Link to={"/"}>
          <ToolTip Children={FaBell} text={"Notifications"} />
        </Link>
        <Link to={"/"}>
          <ToolTip Children={FaSave} text={"Lists"} />
        </Link>
        <Link to={"/"}>
          <ToolTip Children={FaDraftingCompass} text={"Drafts"} />
        </Link>
        <Link className="icon" to="/newblog">
          <ToolTip Children={FaEdit} text={"Edit"} />
        </Link>
      </div>
      <Profile position="right" />
    </div>
  );
};
export default LeftSideBar;
