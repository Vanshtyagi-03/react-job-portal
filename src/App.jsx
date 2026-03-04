// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import JobDetails from "./pages/JobDetails";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/jobs/:id" element={<JobDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <Admin />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import SavedJobs from "./pages/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs";
import Company from "./pages/Company";
import ApplyJob from "./pages/ApplyJob"
import Applications from "./pages/Applications"
import AdminApplications from "./pages/AdminApplications"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/applied" element={<AppliedJobs />} />
        <Route path="/company/:name" element={<Company/>}/>
        <Route path="/apply/:id" element={<ApplyJob/>}/>
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/admin/applications" element={<AdminApplications/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;