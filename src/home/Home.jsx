import { Logout, db } from "../firebase/firebase-config";
import "./style.css";
import BlogList from "../blog-list/BlogList";
import Sidebar from "../side-bar/Sidebar";
import RightSideBar from "../side-bar/right-side-bar/RightSideBar";
import { query, collection, getDocs } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Profile from "../side-bar/profile/Profile";
import Blog from "../blog/Blog";

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
  });
  useEffect(() => {
    getBlogs();
    //console.log("Home mounted");
    return () => {
      //console.log("home unmounted");
    };
  });
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
      <Sidebar />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />} />

        <Route path={`/blog/:blogId`} element={<Blog />} />
      </Routes>

      {/* <div>
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
        </div> */}
      <RightSideBar />
    </div>
  );
}
