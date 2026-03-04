import { useParams } from "react-router-dom";
import { jobs } from "../data";

function Company(){

const { name } = useParams()

const companyJobs =
jobs.filter(j=>j.company===name)

return(

<div className="container py-5">

<h2>{name}</h2>

<p>Industry: IT Services</p>

<p>Employees: 10,000+</p>

<h4 className="mt-4">Open Jobs</h4>

{companyJobs.map(job=>(
<div key={job.id} className="card p-3 mb-3">

<h5>{job.title}</h5>
<p>{job.location} • {job.salary}</p>

</div>
))}

</div>

)

}

export default Company