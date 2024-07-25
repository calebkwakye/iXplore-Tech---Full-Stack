// import React from "react";

// import BlogGrid from "../../components/BlogGrid";
// import CategoriesList from "../../components/CategoriesList";
// import Footer from "../../components/Footer";
// import Heading from "../../components/Heading";
// import Navbar from "../../components/Navbar";
// import SubHeading from "../../components/Subheading";

// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <SubHeading subHeading={"Recent blogs"} />
//         <BlogGrid
//           blogs={blogs}
//           setBlog={(blogID) => {
//             console.log("Selected Blog Clicked:", blogID);
//           }}
//         />
//         <SubHeading subHeading={"Categories"} />
//         <CategoriesList categories={categories} />
//         <Footer />
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Subheading from "../../components/Subheading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loader from "../../components/Loader";

import blogsService from "../../services/blogsService";
import categoriesService from "../../services/categoryService";

export default function HomePage() {
  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsRes = await blogsService.getBlogs();
        const categoriesRes = await categoriesService.getCategories();
        setBlogs(blogsRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent blogs"} />
        <BlogGrid blogs={blogs} />
        <Subheading subHeading={"Categories"} />
        <CategoriesList categories={categories} />
      </div>
      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
        }}
      />
    </>
  );
}