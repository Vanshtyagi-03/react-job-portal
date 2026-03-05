import { useParams } from "react-router-dom";
import { jobs } from "../data";
import { useState } from "react";

function ApplyJob(){

const { id } = useParams()

const job = jobs.find(j=>j.id===parseInt(id))

const [form,setForm] = useState({
name:"",
email:"",
mobile:"",
qualification:"",
experience:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

if(form.mobile.length !== 10){
alert("Enter valid mobile number")
return
}

const applications =
JSON.parse(localStorage.getItem("applications")) || []

// applications.push({
// jobId:job.id,
// jobTitle:job.title,
// company:job.company,
// ...form
// })

applications.push({
jobId:job.id,
jobTitle:job.title,
company:job.company,
status:"Applied",
...form
})

localStorage.setItem(
"applications",
JSON.stringify(applications)
)

alert("Application Submitted Successfully 🚀")

setForm({
name:"",
email:"",
mobile:"",
qualification:"",
experience:""
})

}

const handleReset = ()=>{
setForm({
name:"",
email:"",
mobile:"",
qualification:"",
experience:""
})
}

return(

<div className="container py-5">

<h2 className="mb-4">
Apply for {job.title}
</h2>

<div className="card p-4 shadow">

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label>Name</label>

<input
type="text"
name="name"
className="form-control"
value={form.name}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<label>Email</label>

<input
type="email"
name="email"
className="form-control"
value={form.email}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<label>Mobile</label>

<input
type="number"
name="mobile"
className="form-control"
value={form.mobile}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<label>Qualification</label>

<input
type="text"
name="qualification"
className="form-control"
value={form.qualification}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<label>Experience</label>

<input
type="text"
name="experience"
className="form-control"
value={form.experience}
onChange={handleChange}
/>

</div>

<div className="mb-3">

<label>Upload Resume</label>

<input type="file" className="form-control"/>

</div>

<div className="mb-3">

<label>Upload Photo</label>

<input type="file" className="form-control"/>

</div>

<div className="d-flex gap-3">

<button className="btn btn-success">
Submit Application
</button>

<button
type="button"
className="btn btn-secondary"
onClick={handleReset}
>
Reset Form
</button>

</div>

</form>

</div>

</div>

)

}

export default ApplyJob
