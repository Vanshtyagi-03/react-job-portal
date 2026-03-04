import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jobs } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



/* 🔥 Custom Animated Counter (No library needed) */
function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

function Home() {

  const companies = [
  "tcs.com",
  "infosys.com",
  "wipro.com",
  "ibm.com",
  "accenture.com"
  ]

  return (
    <>
      {/* 🔵 HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(135deg, #4e73df, #1cc88a)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white"
        }}
      >
        <div>
          <h1 className="display-3 fw-bold">
            Find Your Dream Job 🚀
          </h1>
          <p className="lead mt-3">
            50+ Active Jobs | Top Companies | Fast Hiring
          </p>

          <div className="mt-4">
            <Link to="/jobs" className="btn btn-light btn-lg me-3">
              Browse Jobs
            </Link>

            <Link to="/login" className="btn btn-outline-light btn-lg">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* ⭐ Featured Jobs */}

<div className="container py-5">

<h3 className="text-center mb-4">⭐ Featured Jobs</h3>

<Swiper
spaceBetween={20}
slidesPerView={3}
breakpoints={{
640:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}
>

{jobs.filter(j=>j.featured).map(job=>(
  
<SwiperSlide key={job.id}>

<div className="card p-3 shadow-sm border-0">

<div className="d-flex align-items-center mb-2">

<img
src={job.logo}
alt="logo"
style={{width:"40px", marginRight:"10px"}}
onError={(e)=>{
e.target.src=`https://ui-avatars.com/api/?name=${job.company}`
}}
/>

<div>

<h6 className="mb-0">{job.title}</h6>
<small className="text-muted">{job.company}</small>

</div>

</div>

<p className="small">{job.location} • {job.salary}</p>

<Link
to={`/jobs/${job.id}`}
className="btn btn-sm btn-primary"
>
View Job
</Link>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

      {/* 📊 STATS SECTION */}
      <div className="container py-5 text-center">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h2 className="text-primary fw-bold">
              <Counter end={50} />+
            </h2>
            <p>Active Jobs</p>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="text-success fw-bold">
              <Counter end={10} />+
            </h2>
            <p>Top Companies</p>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="text-danger fw-bold">
              <Counter end={10000} />+
            </h2>
            <p>Candidates Hired</p>
          </div>

        </div>
      </div>

      {/* Top Companies Section */}

      <div className="container py-5 text-center">

      <h3 className="mb-4">Top Companies</h3>

      <div className="d-flex justify-content-center gap-4 flex-wrap">

      {companies.map((c, i) => (
      <img
        key={i}
        src={`https://logo.clearbit.com/${c}`}
        alt="company"
        className="bg-white p-3 rounded shadow-sm border"
        style={{ width: "90px" }}
        onError={(e) => {
    e.target.src = `https://ui-avatars.com/api/?name=${c.split(".")[0]}&background=0D6EFD&color=fff`;
        }}
      />
    ))}

      </div>
    </div>

    {/* 🔥 Trending Jobs */}

<div className="container py-5">

<h3 className="text-center mb-4">🔥 Trending Jobs</h3>

<div className="row">

{jobs.slice(0,6).map((job)=>(
  
<div className="col-md-4 mb-4" key={job.id}>

<div className="card p-3 shadow-sm border-0">

<div className="d-flex align-items-center mb-2">

<img
  src={job.logo}
  alt="logo"
  style={{ width: "45px", marginRight: "10px" }}
  onError={(e) => {
    e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=0D6EFD&color=fff`;
  }}
/>

<div>

<h6 className="mb-0">{job.title}</h6>
<small className="text-muted">{job.company}</small>

</div>

</div>

<p className="small">{job.location} • {job.salary}</p>

<Link
to={`/jobs/${job.id}`}
className="btn btn-sm btn-primary"
>
View Job
</Link>

</div>

</div>

))}

</div>

</div>

      {/* 💎 FEATURES SECTION */}
      <div className="container py-5 text-center">
        <div className="row">

          <div className="col-md-4">
            <div className="card p-4 shadow-sm border-0">
              <h4>🔍 Smart Search</h4>
              <p>Filter jobs by location and type easily.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm border-0">
              <h4>⚡ Fast Apply</h4>
              <p>Apply for jobs quickly with one click.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm border-0">
              <h4>📊 Admin Dashboard</h4>
              <p>Manage job listings and analytics.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;