import { Timestamp } from "firebase/firestore";

import moment from "moment";
import { Link } from "react-router-dom";
import {
  getUserId,
  getUserPhoto,
} from "../../firebase/authentication/userDetails";
import trim from "../../functions/trimSummary";

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
  //TODO: show only few lines for content
  //TODO: make sneak pic same as medium.com
  //TODO: LINK TAG MUST ME UPDATED WITH CORRECT ONE
  return (
    <li className="blog-sneak-pic">
      <Link className="blog-sneak-pic" to={`/blog/${getUserId()}/${blogId}`}>
        <div className="head">
          <img className="author-photo" src={getUserPhoto()} alt="" />
          <span className="author-name">{name}</span>
          <span className="blog-date">{`· ${date}`}</span>
        </div>
        <div className="content">
          <h2>{heading}</h2>
          <p>{trim(blogContent)}</p>
        </div>
      </Link>
    </li>
  );
}
export default BlogSneakPic;
