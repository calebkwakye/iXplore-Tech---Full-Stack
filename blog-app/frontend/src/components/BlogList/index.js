import React from "react";
import BlogItem from "../BlogItem";

export default function BlogList({ blogs, setBlog }) {
  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <div className="blog-grid">
      {blogs?.map((blog) => {
        return (
          <BlogItem blog={blog} imageOrientation={"top"} setBlog={setBlog} />
        );
      })}
    </div>
  );
}