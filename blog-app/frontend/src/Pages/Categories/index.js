// import React from "react";

// // Components
// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import Footer from "../../components/Footer";
// import CategoryList from "../../components/CategoriesList";

// // Styles
// import "../../App.css";

// // Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const categories = data.categories;

// export default function CategoriesPage() {

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Categories</p>
//         </div>
//         <CategoryList categories={categories}></CategoryList>
//       </div>
//       <Footer />
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";

// import Navbar from "../../components/Navbar";
// import Heading from "../../components/Heading";
// import Subheading from "../../components/Subheading";
// import CategoriesList from "../../components/CategoriesList";
// import Footer from "../../components/Footer";
// import Loader from "../../components/Loader";

// import categoryService from "../../services/categoryService";

// export default function CategoriesPage() {
//   const [loading, setLoading] = useState(false);
//   const [categories, setCategories] = useState();

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         setLoading(true);
//         const categories = await categoryService.getCategories();
//         setCategories(categories.data);
//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//         setLoading(false);
//       }
//     };
//     fetchPageData();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <Subheading subHeading={"Categories"} />
//         <CategoriesList categories={categories} />
//         <Footer />
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

import categoryService from "../../services/categoryService";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditCategoryModal from "../../components/AddEditCategoryModal";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState();
  const [editCategory, setEditCategory] = useState();
  const [deleteCategory, setDeleteCategory] = useState();

  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const categoriesRes = await categoryService.fetchCategories();
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onCategoryAdd = () => {
    setAddCategory({
      title: "",
      description: "",
      color: "#000000",
    });
  };

  const onCategoryUpdate = (category) => {
    setEditCategory(category);
  };

  const onCategoryDelete = (category) => {
    setDeleteCategory(category);
  };

  const createCategory = async (category) => {
    try {
      const newCategory = await categoryService.createCategory(category);
      setIsSuccess(true);
      setMessage(newCategory.message);
      setCategories((prev) => {
        return [...prev, newCategory];
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddCategory(null);
  };

  const updateCategory = async (category) => {
    try {
      const updatedCategory = await categoryService.updateCategory(category);
      setIsSuccess(true);
      setMessage(updatedCategory.message);
      setCategories((prev) => {
        const index = prev.findIndex((x) => x.id === updatedCategory.data.id);
        prev[index] = updatedCategory.data;
        return prev;
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setEditCategory(null);
  };

  const removeCategory = async (category) => {
    try {
      const newBlog = await categoryService.deleteCategory(category.id);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setCategories((prev) => prev.filter((x) => x.id !== category.id));
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setDeleteCategory(null);
  };

  const AddButton = () => {
    return (
      <button className="btn btn-outline-dark h-75" onClick={onCategoryAdd}>
        ADD CATEGORY
      </button>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
          <AddButton />
        </div>
        <CategoryList
          categories={categories}
          onEdit={onCategoryUpdate}
          onDelete={onCategoryDelete}
        ></CategoryList>
      </div>
      <Footer />
      <AddEditCategoryModal
        addCategory={addCategory}
        editCategory={editCategory}
        createCategory={createCategory}
        updateCategory={updateCategory}
        onClose={() => {
          setAddCategory(null);
          setEditCategory(null);
        }}
      />
      <DeleteCategoryModal
        deleteCategory={deleteCategory}
        removeCategory={removeCategory}
        onClose={() => setDeleteCategory(null)}
      />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
          setMessage("");
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
          setMessage("");
        }}
      />
    </>
  );
}