import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import { isUserSignedIn } from "./firebase/firebase-config";
import { ContextProvider } from "./context/ContextProvider";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), (user) => {
      console.log("onauthstatechange", user);
      if (!user) navigate("/login");
    });
    // navigate("/login");
    return unsub;
  }, []);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/login" element={<LandingPage />} />

        <Route path="/*" element={<PrivateComponent render={<Home />} />} />

        <Route
          path="/newblog"
          element={<PrivateComponent render={<NewBlog />} />}
        />
      </Routes>
    </ContextProvider>
  );
}

function PrivateComponent({ render }) {
  if (!isUserSignedIn()) return <Navigate to={"/login"} />;
  return render;
}
export default App;
