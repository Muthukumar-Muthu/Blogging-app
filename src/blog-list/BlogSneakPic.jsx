import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
function BlogSneakPic({ BlogObj }) {
  const { heading, summary, timeStamp } = BlogObj;
  //console.log(timeStamp);
  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }
  const id = BlogObj.id;
  return (
    <Link to={`/blog/${id}`}>
      <li className="blog-sneak-pic">
        <h2 className="heading">{heading}</h2>
        <p className="summary">{summary.slice(0, 50)}</p>
        <div className="flex">
          <h4 className="author">{getAuth().currentUser.displayName}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </li>{" "}
    </Link>
  );
}
export default BlogSneakPic;
