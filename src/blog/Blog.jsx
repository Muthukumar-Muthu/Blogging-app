import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";
import _ from "lodash";

import "./style.css";
import { db } from "../firebase/firebase-config";

const Blog = () => {
  const { blogId, userId } = useParams();
  const [blogObj, setBlogObj] = useState(null);

  async function getBlog() {
    try {
      const blog = await getDoc(doc(db, `users/${userId}/blogs/${blogId}`));
      setBlogObj(fixBlogObj(blog.data()));
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getBlog();
  }, []);

  if (!blogObj) return <></>; //TODO: warn user about unavaiablity of blog

  let { heading, blogContent, timeStamp, name } = blogObj;

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
function fixBlogObj(blogObj) {
  const obj = _.cloneDeep(blogObj);
  const { blogContent } = obj;
  const blogContentObj = JSON.parse(blogContent);
  const string = generateHTML(blogContentObj, [StarterKit]);
  const html = stringToHtml(string);
  obj.blogContent = html;
  return obj;
}
function stringToHtml(string) {
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  return parse(string, options);
}
export default Blog;
