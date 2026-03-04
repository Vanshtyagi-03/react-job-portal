import { useState } from "react";
import { jobs } from "../data";
import JobCard from "../components/JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter ? job.location === locationFilter : true) &&
      (typeFilter ? job.type === typeFilter : true) &&
      (salaryFilter ? parseInt(job.salary) >= salaryFilter : true)
    );
    
  });

  return (
    <div className="container-fluid py-5">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="card p-4 shadow-sm">
            <h5>Filters</h5>

            <select
              className="form-select mb-3"
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option>Noida</option>
              <option>Delhi</option>
              <option>Gurgaon</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Meerut</option>
            </select>

            <select
              className="form-select mb-3"
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All Types</option>
              <option>Full-time</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>

            <select
              className="form-select"
              onChange={(e) => setSalaryFilter(e.target.value)}
            >
              <option value="">Salary 3+ LPA</option>
              <option value="">Salary 5+ LPA</option>
              <option value="">Salary 6+ LPA</option>
              <option value="">Salary 8+ LPA</option>
              <option value="">Salary 10+ LPA</option>
              <option value="">Salary 12+ LPA</option>
              <option value="">Salary 15+ LPA</option>
              <option value="">Salary 18+ LPA</option>
              <option value="">Salary 20+ LPA</option>
            </select>
          </div>
        </div>

        {/* Jobs */}
        <div className="col-md-9">
          <input
            type="text"
            placeholder="Search job..."
            className="form-control mb-4"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="row g-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Jobs;