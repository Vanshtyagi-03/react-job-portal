import { Link } from "react-router-dom";
import { useContext } from "react";
import  ThemeContext  from "../context/ThemeContext.jsx";
import { useSavedJobs } from "../context/SavedJobsContext";
function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const { savedJobs } = useSavedJobs(); 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">JobPortal</Link>

      <div className="ms-auto">
        <Link className="nav-link d-inline text-white me-3" to="/">Home</Link>
        <Link className="nav-link d-inline text-white me-3" to="/jobs">Jobs</Link>
        <Link className="nav-link d-inline text-white me-3" to="/admin">Admin</Link>
        <Link to="/saved" className="text-white text-decoration-none me-3">
        ⭐ Saved ({savedJobs.length})
        </Link>
        <Link to="/applications" className="nav-link d-inline text-white me-3">
Applications
</Link>
        <button
          className="btn btn-sm btn-light"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
