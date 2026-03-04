// import { useParams } from "react-router-dom";
// import { jobs } from "../data";
// import { useSavedJobs } from "../context/SavedJobsContext";
// function JobDetails() {
//   const { id } = useParams();
//   const job = jobs.find((j) => j.id === parseInt(id));

//   const { savedJobs, toggleSaveJob } = useSavedJobs();
//   const isSaved = savedJobs.some((j) => j.id === job.id);

//   const applyJob = () => {

//   const applied = JSON.parse(
//     localStorage.getItem("appliedJobs") || "[]"
//   );

//   if (!applied.find((j) => j.id === job.id)) {
//     applied.push(job);
//   }

//   localStorage.setItem(
//     "appliedJobs",
//     JSON.stringify(applied)
//   );

//   alert("Application submitted 🚀");
// };

//   if (!job) {
//     return <h2 className="text-center mt-5">Job Not Found</h2>;
//   }

//   return (
//     <div className="container py-5">
//       <div className="card p-5 shadow-lg border-0">

//         <div className="d-flex align-items-center mb-4">
          
//           <img
//           src={job.logo}
//           alt="logo"
//           style={{ width: "50px", borderRadius: "10px" }}
//           onError={(e) => {
//           e.target.src = job.fallbackLogo;
//            }}
//             className="company-logo me-3"
//          />
//           <div>
//             <h2 className="fw-bold">{job.title}</h2>
//             <p className="text-muted mb-0">{job.company}</p>
//           </div>
//         </div>

//         <div className="mb-3">
//           <span className="badge bg-secondary me-2">{job.location}</span>
//           <span className="badge bg-dark me-2">{job.type}</span>
//           <span className="salary-gradient">{job.salary}</span>
//         </div>

//         <p className="mt-4">{job.description}</p>

//         <button
//         className="btn btn-warning"
//         onClick={() => toggleSaveJob(job)}
//         >
//         {isSaved ? "⭐ Saved" : "☆ Save Job"}
//         </button>
//         <button className="btn btn-primary" onClick={applyJob}>
//         Apply Now 🚀
//         </button>

//       </div>
//     </div>
//   );
// }

// export default JobDetails;


import { useParams } from "react-router-dom";
import { jobs } from "../data";
import { useSavedJobs } from "../context/SavedJobsContext";
import { Link } from "react-router-dom";

function JobDetails() {

  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  const { savedJobs, toggleSaveJob } = useSavedJobs();
  const isSaved = savedJobs.some((j) => j.id === job.id);

  // const applyJob = () => {

  //   const applied = JSON.parse(
  //     localStorage.getItem("appliedJobs") || "[]"
  //   );

  //   if (!applied.find((j) => j.id === job.id)) {
  //     applied.push(job);
  //   }

  //   localStorage.setItem(
  //     "appliedJobs",
  //     JSON.stringify(applied)
  //   );

  //   alert("Application submitted 🚀");

  // };

  if (!job) {
    return <h2 className="text-center mt-5">Job Not Found</h2>;
  }

  return (
    <div className="container py-5">

      <div className="card p-5 shadow-lg border-0">

        {/* Company Info */}
        <div className="d-flex align-items-center mb-4">

          <img
            src={job.logo}
            alt="logo"
            style={{ width: "50px", borderRadius: "10px" }}
            onError={(e) => {
              e.target.src = job.fallbackLogo;
            }}
            className="company-logo me-3"
          />

            <div>
            <h2 className="fw-bold">{job.title}</h2>
            <p className="text-muted mb-0">{job.company}</p>
          </div>   

        </div>

        {/* Job Info */}
        <div className="mb-3">
          <span className="badge bg-secondary me-2">{job.location}</span>
          <span className="badge bg-dark me-2">{job.type}</span>
          <span className="badge bg-info me-2">{job.experience}</span>
          <span className="salary-gradient">{job.salary}</span>
        </div>

        {/* Company Details */}

<h5 className="mt-4">Company Details</h5>

<div className="card p-3 bg-light border-0">

<p><strong>Company:</strong> {job.company}</p>

<p><strong>Industry:</strong> IT Services</p>

<p><strong>Employees:</strong> 10,000+</p>

<p><strong>Website:</strong> 
<a
href={`https://${job.company.toLowerCase()}.com`}
target="_blank"
rel="noreferrer"
className="ms-2"
>
Visit Website
</a>
</p>

</div>

        {/* Description */}
        <p className="mt-4">{job.description}</p>

        {/* Skills */}
        <h5 className="mt-4">Required Skills</h5>

        <div className="mb-3">
          {job.skills?.map((skill, i) => (
            <span key={i} className="badge bg-primary me-2 mb-2">
              {skill}
            </span>
          ))}
        </div>

        {/* Qualification */}
        <h5 className="mt-4">Qualification</h5>

        <ul>
          {job.qualification?.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>

        {/* Responsibilities */}
        <h5 className="mt-4">Responsibilities</h5>

        <ul>
          {job.responsibilities?.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        {/* Benefits */}
        <h5 className="mt-4">Benefits</h5>

        <ul>
          {job.benefits?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-4">

          <button
            className="btn btn-warning me-3"
            onClick={() => toggleSaveJob(job)}
          >
            {isSaved ? "⭐ Saved" : "☆ Save Job"}
          </button>
      
          <Link
to={`/apply/${job.id}`}
  className="btn btn-primary"
>
Apply Now 🚀
</Link>

          {/* <div className="mt-4"> */}

{/* <h5>Apply for this Job</h5>

<form>

<div className="mb-3">

<input
type="text"
placeholder="Full Name"
className="form-control"
/>

</div>

<div className="mb-3">

<input
type="email"
placeholder="Email"
className="form-control"
/>

</div>

<div className="mb-3">

<input
type="file"
className="form-control"
/>

</div>

<button className="btn btn-success">
Submit Application
</button>

</form>

</div> */}

          {/* Similar Jobs */}

<h5 className="mt-5">Similar Jobs</h5>

<div className="row">

{jobs
.filter((j) => j.id !== job.id && j.type === job.type)
.slice(0,3)
.map((j) => (

<div key={j.id} className="col-md-4 mb-3">

<div className="card p-3 shadow-sm">

<div className="d-flex align-items-center mb-2">

<img
src={j.logo}
alt="logo"
style={{width:"35px", marginRight:"10px"}}
onError={(e)=>{
e.target.src=j.fallbackLogo
}}
/>

<div>

<h6 className="mb-0">{j.title}</h6>
<small className="text-muted">{j.company}</small>

</div>

</div>

<p className="small">{j.location} • {j.salary}</p>

<a
href={`/jobs/${j.id}`}
className="btn btn-sm btn-outline-primary"
>
View Job
</a>

</div>

</div>

))}

</div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;