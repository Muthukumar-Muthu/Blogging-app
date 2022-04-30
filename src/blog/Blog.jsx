import { Timestamp } from "firebase/firestore";
import moment from "moment";

import { useParams } from "react-router-dom";

import "./style.css";
const Blog = ({ blogs }) => {
  const { blogId } = useParams();
  const blogObj = blogs.filter((blog) => blog.id === blogId)[0];

  const { heading, summary, timeStamp, name } = blogObj;
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
        <p className="summary">{summary}</p>
        <div className="flex">
          <h4 className="author">{name || "loading..."}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </div>
    </div>
  );
};
export default Blog;
