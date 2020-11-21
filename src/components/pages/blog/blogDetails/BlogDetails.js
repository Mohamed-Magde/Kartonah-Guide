import React from "react";
import BlogSideBar from "../blogSideBar/BlogSideBar";
import BlogComments from "./blogDetails-components/blogComments/BlogComments";
import BlogContent from "./blogDetails-components/blogContent/BlogContent";
import BlogRelated from "./blogDetails-components/blogRelated/BlogRelated";

import "./scss/main.css";
const BlogDetails = () => {
  return (
    <div className="blog-details">
      <div className="container blog-details-container">
        <div className="blog-details-wrapper">
          <BlogContent />
          <BlogRelated />
          <BlogComments />
        </div>
        <BlogSideBar />
      </div>
    </div>
  );
};

export default BlogDetails;
