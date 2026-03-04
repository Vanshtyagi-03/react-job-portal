import { useEffect, useState } from "react";

function AdminApplications(){

const [applications,setApplications] = useState([]);

useEffect(()=>{
const data =
JSON.parse(localStorage.getItem("applications")) || [];
setApplications(data);
},[]);

const updateStatus=(index,status)=>{

const updated=[...applications]

updated[index].status=status

setApplications(updated)

localStorage.setItem(
"applications",
JSON.stringify(updated)
)

}

return(

<div className="container py-5">

<h2 className="mb-4">All Applications</h2>

{applications.map((app,i)=>(

<div key={i} className="card p-3 mb-3 shadow">

<h5>{app.jobTitle}</h5>

<p><strong>Company:</strong> {app.company}</p>

<p><strong>Name:</strong> {app.name}</p>

<p><strong>Email:</strong> {app.email}</p>

<p><strong>Mobile:</strong> {app.mobile}</p>

<p><strong>Status:</strong> {app.status}</p>

<div className="d-flex gap-2">

<button
className="btn btn-success btn-sm"
onClick={()=>updateStatus(i,"Shortlisted")}
>
Approve
</button>

<button
className="btn btn-danger btn-sm"
onClick={()=>updateStatus(i,"Rejected")}
>
Reject
</button>

</div>

</div>

))}

</div>

)

}

export default AdminApplications