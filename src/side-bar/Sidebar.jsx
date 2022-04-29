import {
  FaHome,
  FaBell,
  FaSave,
  FaDraftingCompass,
  FaEdit,
} from "react-icons/fa";

import ToolTip from "./ToolTip";
import "./style.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src="\assests\logo.png" alt="blogger-logo" />
      <div className="icons">
        <ToolTip Children={FaHome} text={"Home"} />
        <ToolTip Children={FaBell} text={"Notifications"} />
        <ToolTip Children={FaSave} text={"Lists"} />
        <ToolTip Children={FaDraftingCompass} text={"Drafts"} />
        <ToolTip Children={FaEdit} text={"Edit"} />
      </div>
      <img class="user-photo" src="\assests\user-photo.png" alt="" />
    </div>
  );
};
export default Sidebar;
