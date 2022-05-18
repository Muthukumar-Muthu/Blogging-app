import { Link } from "react-router-dom";

import "./style.css";
import BlogSneakPic from "./BlogSneakPic";

const BlogList = ({ blogs }) => {
  return (
    <section className="blog-list center-component">
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
