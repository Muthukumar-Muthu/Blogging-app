import { Link } from "react-router-dom";

import "./style.css";
import BlogSneakPic from "./BlogSneakPic";

const BlogList = ({ blogs, addButton = true }) => {
  return (
    <section className="blog-list center-component">
      <ul>
        {addButton && (
          <li className="add-blog">
            <Link to="/newblog">Add new Blog + </Link>
          </li>
        )}
        <li className="horizontal-line"></li>
        {blogs.length === 0
          ? "Get Started"
          : blogs.map((blog) => <BlogSneakPic key={blog.id} BlogObj={blog} />)}
      </ul>
    </section>
  );
};
export default BlogList;
