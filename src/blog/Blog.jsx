import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { context } from "../context/ContextProvider";
import "./style.css";
const Blog = ({ blogs }) => {
  const { blogId } = useParams();
  const { user, startUp } = useContext(context);
  const navigate = useNavigate();
  const blogObj = blogs.filter((blog) => blog.id === blogId)[0];
  // useEffect(() => {
  //   if (!user) {
  //     console.log("user not logged returning to login page");
  //     return navigate("/login");
  //   }
  // }, [user]);

  // useEffect(() => {
  //   startUp();
  // }, []);

  if (!blogObj) return <></>;

  const { heading, blogContent, timeStamp, name } = blogObj;
  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <div className="blog-wrapper">
      <div className="blog">
        <h2 className="heading">{heading}</h2>
        <p className="summary">{blogContent}</p>
        <div className="flex">
          <h4 className="author">{name}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </div>
    </div>
  );
};
export default Blog;
