import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import { context } from "./context/ContextProvider";
import ProfilePage from "./profile-page/ProfilePage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser, locationRef } = useContext(context);

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), (user) => {
      console.log("Auth state changed", user);

      if (user) {
        navigate(locationRef.current);
      } else {
        locationRef.current = location.pathname;
      }
      setUser(user);
    });

    return unsub;
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />
      <Route path="/*" element={<PrivateComponent render={<Home />} />} />
      <Route
        path="/newblog"
        element={<PrivateComponent render={<NewBlog />} />}
      />
      <Route
        element={<PrivateComponent render={<ProfilePage />} />}
        path="/:userId"
      />
    </Routes>
  );
}

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
export default App;
