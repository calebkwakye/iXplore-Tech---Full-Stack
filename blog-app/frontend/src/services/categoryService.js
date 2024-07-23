// const Category = require("../models/Categories");

// const createCategory = async (req, res) => {
//   try {
//     const category = new Category({
//       title: req.body.title,
//       description: req.body.description,
//       color: req.body.color,
//     });
//     const newCategory = await category.save();
//     const categoryRes = await Category.findById(newCategory._id);
//     res
//       .status(201)
//       .json({ message: "New category created!", data: categoryRes });
//   } catch (error) {
//     res.status(500).json({ message: error.message, data: [] });
//   }
// };

// // const getCategories = async (req, res) => {
// //   try {
// //     const categories = await Category.find();
// //     res
// //       .status(200)
// //       .json({ message: "Return all categories!", data: categories });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message, data: [] });
// //   }
// // };

// const getCategoryById = async (req, res) => {
//   console.log(req.params.id);
//   res.status(200).json({
//     message: "Get category by ID!",
//     data: [],
//   });
// };

// const updateCategoryByID = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (category) {
//       category.title = req.body.title || category.title;
//       category.description = req.body.description || category.description;
//       category.color = req.body.color || category.color;
//       const updatedCategory = await category.save();
//       res
//         .status(200)
//         .json({ message: "Category updated!", data: updatedCategory });
//     } else {
//       res.status(404).json({ message: "Category not found!", data: [] });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message, data: [] });
//   }
// };

// const deleteCategoryByID = async (req, res) => {
//   try {
//     const categoryDB = await Category.findById(req.params.id);
//     if (!categoryDB) {
//       res
//         .status(400)
//         .json({ message: "Cannot delete category with existing blogs!" });
//     }
//     const category = await Category.findByIdAndDelete(req.params.id);
//     if (category) {
//       res.status(200).json({ message: "Category deleted!", id: req.params.id });
//     } else {
//       res.status(404).json({ message: "Category not found!" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// const getCategories = async () => {
//   try {
//     const data = await fetch("http://localhost:8000/api/categories");
//     if (!data.ok) {
//       console.log(data.statusText);
//       throw Error(data.statusText);
//     }
//     const res = await data.json();
//     return res;
//   } catch (err) {
//     throw Error(err);
//   }
// };

// const categoryService = {
//   getCategories,
//   createCategory,
//   getCategoryById,
//   updateCategoryByID,
//   deleteCategoryByID,
// };



const createCategory = async (category) => {
  const response = await fetch("http://localhost:8000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const categoriesApiData = await response.json();
  return categoriesApiData;
};

const fetchCategories = async () => {
  const response = await fetch("http://localhost:8000/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const categoriesApiData = await response.json();
  return categoriesApiData;
};

const updateCategory = async (category) => {
  const response = await fetch(
    "http://localhost:8000/api/categories/" + category.id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }
  );

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const categoriesApiData = await response.json();
  return categoriesApiData;
};

const deleteCategory = async (id) => {
  const response = await fetch("http://localhost:8000/api/categories/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const categoriesApiData = await response.json();
  return categoriesApiData;
};

const categoryService = {
  createCategory,
  fetchCategories,
  updateCategory,
  deleteCategory,
};

export default categoryService;



// module.exports = categoryController;

// const getCategories = async () => {
//     try {
//       const data = await fetch(
//         "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories"
//       );
//       if (!data.ok) {
//         console.log(data.statusText);
//         throw Error(data.statusText);
//       }
//       const res = await data.json();
//       return res;
//     } catch (err) {
//       throw Error(err);
//     }
//   };
  
//   const categoryService = {
//     getCategories,
//   };
  
//   export default categoryService;