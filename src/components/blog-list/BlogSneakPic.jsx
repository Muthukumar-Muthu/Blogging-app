import { Timestamp } from "firebase/firestore";

import moment from "moment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUserId,
  getUserPhoto,
} from "../../firebase/authentication/userDetails";
import getUserDetail from "../../firebase/function/getUserDetail";
import trim from "../../functions/trimSummary";
import { fromPairs } from "lodash";

function BlogSneakPic({ BlogObj }) {
  const [authorDetail, setAuthorDetail] = useState({});
  const { heading, blogContent, timeStamp, name, authorId } = BlogObj;
  const blogId = BlogObj.id;
  useEffect(() => {
    getUserDetail(authorId)
      .then((responseObj) => setAuthorDetail(responseObj))
      .catch((err) => console.warn(err));
  }, []);

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
      <Link
        className="blog-sneak-pic"
        to={`/blog/${authorDetail.userId}/${blogId}`}
      >
        <div className="head">
          <img className="author-photo" src={authorDetail.photoUrl} alt="" />
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
