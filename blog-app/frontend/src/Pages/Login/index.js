import React from "react";


import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SubHeading from "../../components/Subheading";

const data = require("../../dummy-data.json");


export default function LoginPage() {
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