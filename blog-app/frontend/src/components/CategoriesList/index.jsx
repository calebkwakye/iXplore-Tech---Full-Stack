// import React from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// import "./index.css";

// export default function CategoriesList({ categories }) {
//   const navigate = useNavigate();
//   const navigateToBlog = (categoryId) => {
//     navigate("/blogs/" + categoryId);
//   };
//   if (!categories) {
//     return null;
//   }
//   return (
//     <div className="category-list">
//       {categories.map((category) => {
//         return (
//           <button
//             key={category.id}
//             className="card"
//             style={{ borderRadius: "0px", border: "none", padding: "0px" }}
//             onClick={() => {
//               navigateToBlog(category.id);
//             }}
//           >
//             <div
//               className="card-body"
//               style={{
//                 backgroundColor: category.color + "33",
//                 position: "relative",
//                 zIndex: 0,
//                 width: "100%",
//               }}
//             >
//               <h5 className="card-title">{category.title}</h5>
//             </div>
//             <div className="card-body">
//               <p className="card-text">
//                 {category.description.substring(1, 100)} ...
//               </p>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// CategoriesList.prototype = {
//   categories: PropTypes.array.isRequired,
// };

// import React from "react";

// import "./index.css";

// export default function CategoriesList({ categories }) {
//   return (
//     <div className="category-list">
//       {categories.map((category) => {
//         return (
//           <button
//             key={category.id}
//             className="card"
//             style={{ borderRadius: "0px", border: "none", padding: "0px" }}
//             onClick={() => {
//               console.log("TODO: Navigate to categories page");
//             }}
//           >
//             <div
//               className="card-body"
//               style={{
//                 backgroundColor: category.color + "33",
//                 position: "relative",
//                 zIndex: 0,
//                 width: "100%",
//               }}
//             >
//               <h5 className="card-title">{category.title}</h5>
//             </div>
//             <div className="card-body">
//               <p className="card-text">
//                 {category.description.substring(1, 100)} ...
//               </p>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// }


// import React from "react";
// import PropTypes from "prop-types";

// export default function CategoriesList({
//   categories,
//   categoryId,
//   setCategoryId,
// }) {
//   return categories.map((category, index) => {
//     return categoryId === category.id.toString() ? (
//       <button
//         key={index}
//         onClick={() => setCategoryId(category.id)}
//         style={{ color: "blue" }}
//       >
//         <p key={index}>{category.title}</p>
//       </button>
//     ) : (
//       <button
//         key={index}
//         onClick={() => setCategoryId(category.id)}
//         style={{ color: "black" }}
//       >
//         <p key={index}>{category.title}</p>
//       </button>
//     );
//   });
// }

// CategoriesList.propTypes = {
//   categories: PropTypes.array.isRequired,
//   categoryId: PropTypes.string.isRequired,
//   setCategoryId: PropTypes.func.isRequired,
// };

// import React from "react";

// import "./index.css";

// export default function CategoryList({ categories }) {

// if (!categories) return null;
//   return (
//     <div className="category-list">
//       {categories?.map((category, index) => {
//         return (
//             <div
//             key={index}
//             className="card"
//             style={{ borderRadius: "0px", border: "none" }}
//           >
//             <div
//               className="card-body"
//               style={{
//                 backgroundColor: category.color + "33",
//                 position: "relative",
//                 zIndex: 0,
//               }}
//             >
//               <h5 className="card-title">{category.title}</h5>
//             </div>
//             <div className="card-body">
//               <p className="card-text">
//                 {category.description.substring(1, 100)} ...
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";
import EditButtons from "../EditButtons";

export default function CategoriesList({ categories, onEdit, onDelete }) {
  if (!categories && !categories?.length) {
    return null;
  }

  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            to={`/categories`}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
            {onEdit && onDelete && (
              <EditButtons onEdit={()=>{
                onEdit(category);
              
              }} onDelete={()=>{
                onDelete(category);
              }} />
            )}
          </Link>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};