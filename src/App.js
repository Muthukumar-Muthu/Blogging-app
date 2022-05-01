import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import { db } from "./firebase/firebase-config";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [blogs, setBlogs] = useState([]);

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
      setUserObj({});
    }
  });
  useEffect(() => {
    console.log(userLogged);
    if (userLogged) {
      let unsub = 0;
      try {
        unsub = getBlogs();
      } catch (error) {
        console.warn(error);
      }
      return unsub;
    }
  }, [userLogged]);

  function getBlogs() {
    console.log("Getting Blogs");

    const blogsQuery = query(
      collection(db, `users/${getAuth().currentUser.uid}/blogs`),
      orderBy("timeStamp", "desc")
    );
    const q = onSnapshot(blogsQuery, function (snapshot) {
      let blogsArray = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        blogsArray.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsArray);
    });
    return q;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage setUserObj={setUserObj} setUserLogged={setUserLogged} />
        }
      />
      {userLogged && (
        <>
          <Route
            path="/home/*"
            element={
              <Home
                blogs={blogs}
                userObj={userObj}
                setUserLogged={setUserLogged}
                setBlogs={setBlogs}
              />
            }
          />
          <Route path={`/blog/new`} element={<NewBlog />} />
        </>
      )}
    </Routes>
  );
}

export default App;
