import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { getAuth } from "firebase/auth";
function BlogSneakPic({ BlogObj }) {
  const { heading, summary, timeStamp } = BlogObj;
  console.log(timeStamp);
  const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
  const dateObj = time.toDate();
  const date = moment(dateObj).format("LLL");

  return (
    <li>
      <h3 className="heading">{heading}</h3>
      <p className="summary">{summary}</p>
      <div className="flex">
        <h4 className="author">{getAuth().currentUser.DisplayName}</h4>
        <h6 className="time">{date}</h6>
      </div>
    </li>
  );
}
export default BlogSneakPic;
