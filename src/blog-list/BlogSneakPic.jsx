import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { Link } from "react-router-dom";
import { getUserId } from "../firebase/firebase-config";

function BlogSneakPic({ BlogObj }) {
  const { heading, blogContent, timeStamp, name } = BlogObj;
  const blogId = BlogObj.id;

  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <Link className="blog-sneak-pic" to={`/blog/${getUserId()}/${blogId}`}>
      <li className="blog-sneak-pic">
        <h2 className="heading">{heading}</h2>
        <p className="summary">{blogContent}</p>
        <div className="flex">
          <h4 className="author">{name}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </li>
    </Link>
  );
}
export default BlogSneakPic;
