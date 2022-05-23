import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { userContext } from "../context/UserContext";

const PrivateRoute = ({ element: C }) => {
  const { user } = useContext(userContext);

  const location = useLocation();
  const isPublicPath = comparePath(`/blog/:userId/:blogId`, location.pathname);
  return isPublicPath ? C : user ? C : <Navigate to={"/login"} />;
};
function comparePath(s1 = "", s2 = "") {
  const path1 = s1.split("/");
  const path2 = s2.split("/");
  let isPublic = false;
  if (path1[0] === path2[0] && path1.length === path2.length) isPublic = true;
  return isPublic;
}
export default PrivateRoute;
