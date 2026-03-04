// import { useState } from "react";
// import { jobs } from "../data";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// function Admin() {
//   const [jobList, setJobList] = useState(jobs);
//   const [newTitle, setNewTitle] = useState("");
//   const [search, setSearch] = useState("");

//   const filteredJobs = jobList.filter((job) =>
//     job.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const jobTypes = {
//     "Full-time": jobList.filter(j => j.type === "Full-time").length,
//     "Remote": jobList.filter(j => j.type === "Remote").length,
//     "Hybrid": jobList.filter(j => j.type === "Hybrid").length,
//   };

//   const data = {
//     labels: Object.keys(jobTypes),
//     datasets: [
//       {
//         data: Object.values(jobTypes),
//         backgroundColor: ["#0d6efd", "#198754", "#ffc107"],
//       },
//     ],
//   };

//   return (
//     <div className="container py-5">

//       <h2 className="text-center mb-4">Admin Dashboard</h2>

//       {/* Pie Chart */}
//       <div className="row mb-4">
//         <div className="col-md-6 mx-auto">
//           <div className="card p-4 shadow">
//             <h5 className="text-center">Jobs by Type</h5>
//             <Pie data={data} />
//           </div>
//         </div>
//       </div>

//       {/* Add Job */}
//       <div className="card p-4 mb-4 shadow">
//         <h5>Add Job</h5>
//         <input
//           className="form-control my-2"
//           placeholder="Job Title"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//         />
//         <button
//           className="btn btn-success"
//           onClick={() => {
//             const newJob = {
//               id: jobList.length + 1,
//               title: newTitle,
//               company: "Custom Company",
//               location: "Remote",
//               type: "Full-time",
//               salary: "8 LPA"
//             };
//             setJobList([...jobList, newJob]);
//             setNewTitle("");
//           }}
//         >
//           Add Job
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search job..."
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Table */}
//       <div className="card shadow">
//         <div className="card-body table-responsive">
//           <table className="table table-hover">
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Company</th>
//                 <th>Location</th>
//                 <th>Type</th>
//                 <th>Salary</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredJobs.map((job) => (
//                 <tr key={job.id}>
//                   <td>{job.id}</td>
//                   <td>{job.title}</td>
//                   <td>{job.company}</td>
//                   <td>{job.location}</td>
//                   <td>{job.type}</td>
//                   <td>{job.salary}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() =>
//                         setJobList(jobList.filter((j) => j.id !== job.id))
//                       }
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Admin;

import { useState } from "react";
import { jobs } from "../data";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

function Admin() {
  const [jobList, setJobList] = useState(jobs);
  const [newTitle, setNewTitle] = useState("");

  const jobTypes = {
    "Full-time": jobList.filter(j => j.type === "Full-time").length,
    "Remote": jobList.filter(j => j.type === "Remote").length,
    "Hybrid": jobList.filter(j => j.type === "Hybrid").length,
  };

  const data = {
    labels: Object.keys(jobTypes),
    datasets: [
      {
        data: Object.values(jobTypes),
        backgroundColor: ["#4e73df", "#1cc88a", "#f6c23e"],
      },
    ],
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h4 className="mb-4">Admin Panel</h4>
        <p>Dashboard</p>
        <p>Total Jobs: {jobList.length}</p>
        <p>Manage Listings</p>
      </div>

      {/* Main Content */}
      <div className="flex-fill p-5" style={{ background: "#f8fafc" }}>
        <h2 className="mb-4 fw-bold">Dashboard Overview</h2>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm border-0">
              <h5>Total Jobs</h5>
              <h3 className="text-primary">{jobList.length}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm border-0">
              <h5>Remote Jobs</h5>
              <h3 className="text-success">{jobTypes["Remote"]}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm border-0">
              <h5>Hybrid Jobs</h5>
              <h3 className="text-warning">{jobTypes["Hybrid"]}</h3>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="card p-4 shadow-sm mb-4 border-0">
          <h5 className="mb-3">Jobs Distribution</h5>
          <Pie data={data} />
        </div>

        {/* Add Job */}
        <div className="card p-4 shadow-sm border-0">
          <h5>Add New Job</h5>
          <input
            className="form-control my-3"
            placeholder="Job Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            className="btn btn-dark"
            onClick={() => {
              const newJob = {
                id: jobList.length + 1,
                title: newTitle,
                company: "Custom Company",
                location: "Remote",
                type: "Full-time",
                salary: "8 LPA"
              };
              setJobList([...jobList, newJob]);
              setNewTitle("");
            }}
          >
            Add Job
          </button>
          <Link
to="/admin/applications"
className="btn btn-light mt-3"
>
View Applications
</Link>
        </div>
      </div>

    </div>
  );
}

export default Admin;