import { useSavedJobs } from "../context/SavedJobsContext";
import JobCard from "../components/JobCard";

function SavedJobs() {

  const { savedJobs } = useSavedJobs();

  return (
    <div className="container py-5">
      <h2 className="mb-4">⭐ Saved Jobs</h2>

      <div className="row">
        {savedJobs.length === 0 && <p>No saved jobs yet.</p>}

        {savedJobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedJobs;