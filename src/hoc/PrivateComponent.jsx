import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { context } from "../context/ContextProvider";

function PrivateComponent({ render }) {
  const { startUp, user, navigate } = useContext(context);
  const location = useLocation();
  const path = comparePath(`/blog/:userId/:blogId`, location.pathname);

  startUp();

  return path ? render : user ? render : <Navigate to={"/login"} />;
}

function comparePath(s1 = "", s2 = "") {
  const path1 = s1.split("/");
  const path2 = s2.split("/");
  return path1.length === path2.length;
}
export default PrivateComponent;
