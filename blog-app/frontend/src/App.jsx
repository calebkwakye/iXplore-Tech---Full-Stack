import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import HomePage from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";


function App() {
  return (
    <BlogsPage />
    // <div className="App">
    //   <BlogsPage />
    //   {/* < BlogsPage /> */}
    // </div>
  );
  
}

export default App;


