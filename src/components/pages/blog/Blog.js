import React from "react";
import "./scss/main.css";
import BlogBanner from "./blogBanner/BlogBanner";
import BlogList from "./blogList/BlogList";
import BlogSideBar from "./blogSideBar/BlogSideBar";

const Blog = () => {
  return (
    <div className="blog">
      <BlogBanner />
      <div className="container blog-container">
        <BlogList />
        <BlogSideBar />
      </div>
    </div>
  );
};

export default Blog;
