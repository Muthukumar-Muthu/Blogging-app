import { Link } from "react-router-dom";

import "./style.css";
import BlogSneakPic from "./BlogSneakPic";
import getMargin from "../utils/margins";

const BlogList = ({ blogs }) => {
  console.log("blog-list", blogs);
  const { leftMargin, rightMargin } = getMargin();
  return (
    <section
      className="blog-list"
      style={{
        marginInline: `${leftMargin + 5}px ${rightMargin + 5}px`,
      }}
    >
      <ul>
        <Link to="/newblog">
          <li className="add-blog">Add new Blog +</li>
        </Link>

        {blogs.length === 0
          ? "Get Started"
          : blogs.map((blog) => <BlogSneakPic key={blog.id} BlogObj={blog} />)}
      </ul>
    </section>
  );
};
export default BlogList;
