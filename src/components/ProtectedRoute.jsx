// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const role = localStorage.getItem("role");

//   if (!role) {
//     return <Navigate to="/login" />;
//   }

//   if (role !== "admin") {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;