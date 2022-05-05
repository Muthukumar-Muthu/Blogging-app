import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import { context } from "./context/ContextProvider";
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
    </Routes>
  );
}

function PrivateComponent({ render }) {
  //if (!isUserSignedIn()) return <Navigate to={"/login"} />;
  return render;
}
export default App;
