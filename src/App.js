import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";

function App() {
  const navigate = useNavigate();
  console.log("app now");
  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), (user) => {
      console.log("onauthstatechange", user);
      if (!user) navigate("/login");
    });
    navigate("/login");
    return unsub;
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />

      <Route path="/*" element={<Home />} />

      <Route path="/newblog" element={<NewBlog />} />
    </Routes>
  );
}

export default App;
