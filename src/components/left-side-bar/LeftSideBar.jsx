import {
  FaHome,
  FaBell,
  FaSave,
  FaDraftingCompass,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile from "../profile/Profile";
import ToolTip from "../../hoc/ToolTip";
import "./style.css";
const LeftSideBar = ({ showToolTip, setshowToolTip }) => {
  return (
    <div className="sidebar leftsidebar">
      <Link to={"/"}>
        <img className="logo" src="\assests\logo.png" alt="blogger-logo" />
      </Link>
      <div className="icons">
        <Link to={"/"}>
          <ToolTip Children={FaHome} text={"Home"} />
        </Link>
        <ToolTip Children={FaBell} text={"Notifications"} />
        <ToolTip Children={FaSave} text={"Lists"} />
        <ToolTip Children={FaDraftingCompass} text={"Drafts"} />
        <Link className="icon" to="/newblog">
          <ToolTip Children={FaEdit} text={"Edit"} />
        </Link>
      </div>
      <Profile
        showToolTip={showToolTip}
        position="right"
        setshowToolTip={setshowToolTip}
      />
    </div>
  );
};
export default LeftSideBar;
