import React from "react";


import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SubHeading from "../../components/Subheading";

const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        
        <Footer />
      </div>
    </>
  );
}