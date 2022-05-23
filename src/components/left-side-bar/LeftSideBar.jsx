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
const LeftSideBar = ({ windowWidth }) => {
  return (
    <div
      className="leftsidebar"
      style={
        windowWidth < 720
          ? {
              height: "fit-content",
              top: "auto",
              right: "0",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }
          : {}
      }
    >
      <Link to={"/"}>
        <img
          className="logo"
          src="\assests\logo.png"
          style={
            windowWidth < 720
              ? {
                  margin: 0,
                  padding: 0,
                }
              : {}
          }
          alt="blogger-logo"
        />
      </Link>
      <div
        className="icons"
        style={
          windowWidth < 720
            ? {
                flexDirection: "row",
                margin: 0,
              }
            : {}
        }
      >
        <Link
          style={
            windowWidth < 720
              ? { margin: 0, marginInlineStart: "5px", padding: 0 }
              : {}
          }
          to={"/"}
        >
          <ToolTip Children={FaHome} text={"Home"} />
        </Link>
        <Link
          style={
            windowWidth < 720
              ? { margin: 0, marginInlineStart: "5px", padding: 0 }
              : {}
          }
          to={"/"}
        >
          <ToolTip Children={FaBell} text={"Notifications"} />
        </Link>
        <Link
          style={
            windowWidth < 720
              ? { margin: 0, marginInlineStart: "5px", padding: 0 }
              : {}
          }
          to={"/"}
        >
          <ToolTip Children={FaSave} text={"Lists"} />
        </Link>
        <Link
          style={
            windowWidth < 720
              ? { margin: 0, marginInlineStart: "5px", padding: 0 }
              : {}
          }
          to={"/"}
        >
          <ToolTip Children={FaDraftingCompass} text={"Drafts"} />
        </Link>
        <Link
          style={
            windowWidth < 720
              ? { margin: 0, marginInlineStart: "5px", padding: 0 }
              : {}
          }
          className="icon"
          to="/newblog"
        >
          <ToolTip Children={FaEdit} text={"Edit"} />
        </Link>
      </div>
      <Profile
        position="right"
        style={windowWidth < 720 ? { margin: 0 } : {}}
      />
    </div>
  );
};
export default LeftSideBar;
