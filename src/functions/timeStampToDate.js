import { Timestamp } from "firebase/firestore";
import moment from "moment";

export async function timeStampToDate(timeStamp) {
  let date = {};
  if (!timeStamp) {
    date = new Date();
  } else {
    try {
      const res = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
      date = res.toDate();
    } catch (error) {
      console.log(error);
    }
  }
  const dateString = moment(date).format("LLL");
  console.log(dateString);

  return dateString;
}
