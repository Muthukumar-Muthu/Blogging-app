import { Link } from "react-router-dom";
import "./style.css";
import BlogSneakPic from "./BlogSneakPic";
const BlogList = ({ blogs }) => {
  return (
    <section className="blog-list">
      <ul>
        <li className="add-blog">
          <Link to="/blog/new">Add new Blog +</Link>
        </li>
        {blogs.length === 0
          ? "Get Started"
          : blogs.map((blog) => <BlogSneakPic key={blog.id} BlogObj={blog} />)}
      </ul>
    </section>
  );
};
export default BlogList;
