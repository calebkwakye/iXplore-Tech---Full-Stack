
// Third party
import React from "react";

// Components
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

// Styles
import "../../App.css";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const categories = data.categories;

export default function Categories() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
        </div>
        <CategoryList categories={categories}></CategoryList>
      </div>
      <Footer />
    </>
  );
}


// import React from "react";
// import "./index.css"


// export default function Categories({ blogPost }) {
//   return (
//     <div className="flex-wrap">
//       {blogPost.categories.map((category, index) => {
//         return (
//           <p
//             key={index}
//             className="category-tag"
//             style={{
//               color: category.color,
//               backgroundColor: category.color + "33",
//             }}
//           >
//             {category.title}
//           </p>
//         );
//       })}
//     </div>
//   );
// }