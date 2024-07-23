// import React from "react";

// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import HomePage from "./Pages/Home";
// import BlogsPage from "./Pages/Blogs";
// import CategoriesPage from "./Pages/Categories";


// function App() {
//   return (
//     // <div className="App">
//       // <BlogsPage />
//       <CategoriesPage />
//       // <HomePage/>
//     // </div>
//   );
  
// }

// export default App;

import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";
import BlogPage from "./Pages/Blog";
import CategoriesPage from "./Pages/Categories";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import AboutPage from "./Pages/About";
import ProfilePage from "./Pages/Profile";


const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;