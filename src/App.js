import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { getAuth } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";

function App() {
  const [userLogged, setUserLogged] = useState(false);

  console.log("app");
  getAuth().onAuthStateChanged((user) => {
    console.log("onauthstatechange", user);
    setUserLogged(user);
  });

  return (
    <Routes>
      <Route path="/" element={<LandingPage setUserLogged={setUserLogged} />} />
      {userLogged && (
        <>
          <Route
            path="/home/*"
            element={
              <Home userLogged={userLogged} setUserLogged={setUserLogged} />
            }
          />

          <Route path="newblog" element={<NewBlog />} />
        </>
      )}
    </Routes>
  );
}

export default App;
