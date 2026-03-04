import { useEffect,useState } from "react"

function Applications(){

const [apps,setApps] = useState([])

useEffect(()=>{

const data =
JSON.parse(localStorage.getItem("applications")) || []

setApps(data)

},[])

return(

<div className="container py-5">

<h2 className="mb-4">My Applications</h2>

{apps.length===0 && <p>No applications yet.</p>}

{apps.map((a,i)=>(

<div key={i} className="card p-3 mb-3">

<h5>{a.jobTitle}</h5>

<p>{a.company}</p>

<p>
Applicant: {a.name}
</p>

<p>Email: {a.email}</p>

<p>Status: 
<span className="badge bg-info ms-2">
{a.status}
</span>
</p>
</div>


))}

</div>

)

}

export default Applications