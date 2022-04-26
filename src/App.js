import { auth } from "./firebase/firebase-config";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Blog from "./blog/Blog";
function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userObj, setUserObj] = useState({});

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    function observer(user) {
      if (user) {
        setUserLogged(true);
        setUserObj(getAuth().currentUser);
        //console.log("Logged");
        navigate("/home");
      } else {
        setUserLogged(false);
        //console.log("Logged out");
        navigate("/");
      }
      //console.log(getAuth().currentUser);
    }
    const unsubsribe = onAuthStateChanged(auth, observer);
    return unsubsribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/home"
        element={<Home blogs={blogs} userObj={userObj} setBlogs={setBlogs} />}
      />
      <Route path={`/blog/new`} element={<NewBlog />} />
      <Route path={`/blog/:blogId`} element={<Blog />} />
    </Routes>
  );
}

export default App;
