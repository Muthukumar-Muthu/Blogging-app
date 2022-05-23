import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Author from "../author/Author";
import "./style.css";
import breakPath from "../../functions/breakPath";

const RightSideBar = ({ windowWidth }) => {
  const [isBlog, setIsBlog] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { path, userId, blogId } = breakPath(location.pathname);

    if (!(path === "blog" && userId && blogId)) {
      setIsBlog(false);
    } else setIsBlog(true);
  }, [location]);

  return (
    <div
      className="right-side-bar-wrapper rightsidebar"
      style={
        windowWidth < 720
          ? {
              display: "block",
              position: "static",
              width: "100%",
              height: "max-content",
            }
          : {}
      }
    >
      {isBlog ? (
        <Author />
      ) : (
        <div className="right-side-bar">
          <p>
            Recent blog's will be appear here
            <bold>Still yet to be implement </bold>
          </p>
        </div>
      )}
    </div>
  );
};
export default RightSideBar;
