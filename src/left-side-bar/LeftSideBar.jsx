import {
  FaHome,
  FaBell,
  FaSave,
  FaDraftingCompass,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from "../profile/Profile";
import ToolTip from "./ToolTip";
import "./style.css";
const LeftSideBar = ({ showToolTip, setshowToolTip }) => {
  return (
    <div className="sidebar">
      <img className="logo" src="\assests\logo.png" alt="blogger-logo" />
      <div className="icons">
        <ToolTip Children={FaHome} text={"Home"} />
        <ToolTip Children={FaBell} text={"Notifications"} />
        <ToolTip Children={FaSave} text={"Lists"} />
        <ToolTip Children={FaDraftingCompass} text={"Drafts"} />
        <Link className="icon" to="/blog/new">
          <ToolTip Children={FaEdit} text={"Edit"} />
        </Link>
      </div>
      <Profile showToolTip={showToolTip} setshowToolTip={setshowToolTip} />
    </div>
  );
};
export default LeftSideBar;
