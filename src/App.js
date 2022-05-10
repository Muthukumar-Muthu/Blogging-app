import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import Home from "./pages/home/Home";
import NewBlog from "./pages/new-blog/NewBlog";
import { context } from "./context/ContextProvider";
import ProfilePage from "./pages/profile-page/ProfilePage";
import PrivateComponent from "./hoc/PrivateComponent";
function App() {
  const location = useLocation();
  const { navigate, setUser, locationRef } = useContext(context);

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
        path="/profile"
      />
    </Routes>
  );
}

export default App;
