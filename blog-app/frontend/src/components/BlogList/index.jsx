import React from "react";
import BlogItem from "../BlogItem";
import PropTypes from "prop-types";

import "./index.css";

export default function BlogList({ blogs, onBlogEdit, onBlogDelete }) {
  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <div className="blog-grid">
      {blogs?.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            blog={blog}
            imageOrientation={"top"}
            onBlogEdit={onBlogEdit}
            onBlogDelete={onBlogDelete}
          />
        );
      })}
    </div>
  );
}

BlogList.prototype = {
  blogs: PropTypes.array.isRequired,
  onBlogEdit: PropTypes.func,
  onBlogDelete: PropTypes.func,
};

// import React from "react";
// import PropTypes from "prop-types"
// import "./index.css"
// import BlogItem from "../BlogItem";

// export default function BlogList({ blogs, setBlog }) {
//   if (!blogs || !blogs.length) {
//     return null;
//   }

//   return (
//     <div className="blog-grid">
//       {blogs?.map((blog) => {
//         return (
//           <BlogItem blog={blog} imageOrientation={"top"} setBlog={setBlog} />
//         );
//       })}
//     </div>
//   );
// }

// import React from "react";
// import PropTypes from "prop-types"
// import "./index.css"
// import BlogItem from "../BlogItem";

// export default function BlogList({ blogPosts }) {

//   return (
//     <div className="blog-list">
//       {blogPosts.map((blog, index) => {
//         return (
//           <div
//           key = {index}
//           style = {{
//             width: "100%"
//           }}
//           >
//           <BlogItem 
//           index = {index}
//           blog={blog} 
//           imageOrientation={"top"} 
//           // setBlog={setBlog}
//            />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// BlogList.prototypes = {
//   blogPosts: PropTypes.array.isRequired,
// }