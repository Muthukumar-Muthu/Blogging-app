import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { context } from "../context/ContextProvider";

function PrivateComponent({ render }) {
  const { startUp, user, navigate } = useContext(context);
  const location = useLocation();
  useEffect(() => {
    startUp();
  }, []);
  useEffect(() => {
    if (comparePath(`/blog/:userId/:blogId`, location.pathname)) {
    } else if (!user) {
      console.log("user not logged returning to login page");
      return navigate("/login");
    }
  }, [user]);

  return render;
}

function comparePath(s1 = "", s2 = "") {
  const path1 = s1.split("/");
  const path2 = s2.split("/");
  return path1.length === path2.length;
}
export default PrivateComponent;
