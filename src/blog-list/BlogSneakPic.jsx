import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { getUserName } from "../firebase/firebase-config";

function BlogSneakPic({ BlogObj }) {
  const location = useLocation();
  console.log(location.pathname);

  const { heading, summary, timeStamp } = BlogObj;
  const id = BlogObj.id;

  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <Link className="blog-sneak-pic" to={`/blog/${id}`}>
      <li className="blog-sneak-pic">
        <h2 className="heading">{heading}</h2>
        <p className="summary">{summary.slice(0, 50)}</p>
        <div className="flex">
          <h4 className="author">{getUserName()}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </li>
    </Link>
  );
}
export default BlogSneakPic;
