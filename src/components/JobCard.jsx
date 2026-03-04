import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card job-card p-4 shadow-sm h-100 position-relative">

        {job.featured && (
          <span className="badge bg-warning position-absolute top-0 end-0 m-2">
            ⭐ Featured
          </span>
        )}

        <div className="d-flex align-items-center mb-3">
          <img
            src={job.logo}
            alt="logo"
            onError={(e) => (e.target.src = job.fallbackLogo)}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              objectFit: "cover"
            }}
          />

          <div className="ms-3">
            <h5 className="mb-0">{job.title}</h5>
            <small className="text-muted">{job.company}</small>
          </div>
        </div>

        <p>
          <span className="badge bg-secondary me-2">
            {job.location}
          </span>
          <span className="badge bg-dark">
            {job.type}
          </span>
        </p>

        <h5 className="text-primary fw-bold">{job.salary}</h5>

        <Link to={`/jobs/${job.id}`} className="btn btn-dark mt-3 w-100">
          View Details →
        </Link>

      </div>
    </div>
  );
}

export default JobCard;