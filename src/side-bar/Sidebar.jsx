import {
  FaHome,
  FaBell,
  FaSave,
  FaDraftingCompass,
  FaEdit,
} from "react-icons/fa";
import Profile from "./profile/Profile";
import ToolTip from "./ToolTip";
import "./style.css";
const Sidebar = ({ showToolTip, setshowToolTip }) => {
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
      <Profile showToolTip={showToolTip} setshowToolTip={setshowToolTip} />
    </div>
  );
};
export default Sidebar;
