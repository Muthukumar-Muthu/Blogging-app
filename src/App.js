import { Login, Logout, auth } from "./firebase/firebase-config";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  const [userLogged, setUserLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function observer(user) {
      if (user) {
        setUserLogged(true);
        console.log("Logged");
        navigate("/home");
      } else {
        setUserLogged(false);
        console.log("Logged out");
        navigate("/");
      }
      console.log(getAuth().currentUser);
    }
    const unsubsribe = onAuthStateChanged(auth, observer);
    return unsubsribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
