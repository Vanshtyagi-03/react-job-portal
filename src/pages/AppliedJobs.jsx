import { useEffect, useState } from "react";

function AppliedJobs(){

const [jobs,setJobs] = useState([])

useEffect(()=>{

const data =
JSON.parse(localStorage.getItem("appliedJobs")) || []

setJobs(data)

},[])

return(

<div className="container py-5">

<h2 className="mb-4">💼 Applied Jobs</h2>

{jobs.length===0 ? (
<p>No jobs applied yet.</p>
) : (

jobs.map(job=>(
<div key={job.id} className="card p-3 mb-3">

<h5>{job.title}</h5>
<p>{job.company}</p>

</div>
))

)}

</div>

)

}

export default AppliedJobs;