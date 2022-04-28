import { Logout, db } from "../firebase/firebase-config";
import "./style.css";
import BlogList from "../blog-list/BlogList";

import { query, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Profile from "../side-bar/profile/Profile";

export default function Home({
  getUserDetail,
  localUserObj,
  setBlogs,
  setUserLogged,
  userObj,
  blogs,
}) {
  useEffect(() => {
    getUserDetail();
  }, []);
  useEffect(() => {
    getBlogs();
    //console.log("Home mounted");
    return () => {
      //console.log("home unmounted");
    };
  }, []);
  async function getBlogs() {
    const blogsArray = [];

    try {
      //console.log(userObj, "userObj");
      const userId = userObj.uid;
      //console.log(userId);

      const blogsQuery = query(collection(db, `users/${userId}/blogs`));

      const blogs = await getDocs(blogsQuery);
      blogs.forEach((blog) => {
        blogsArray.push({ ...blog.data(), id: blog.id });
      });
      if (blogsArray.length !== 0) {
        //console.log("setting");
        setBlogs(blogsArray);
      } else console.log("not setting the state");
    } catch (error) {
      //console.log(error);
    }
  }
  const navigate = useNavigate();
  //console.log(blogs);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
      <div>
        <div
          className="logout"
          onClick={() => {
            Logout(() => {
              setUserLogged(false);
              navigate("/");
              //console.log("navigated to login");
            });
          }}
        >
          Logout
        </div>
        <Profile localUserObj={localUserObj} />
      </div>
    </div>
  );
}
