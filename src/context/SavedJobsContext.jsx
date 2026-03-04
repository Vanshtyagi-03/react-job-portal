import { createContext, useState, useEffect, useContext } from "react";

export const SavedJobsContext = createContext();

export function SavedJobsProvider({ children }) {

  const [savedJobs, setSavedJobs] = useState(() => {
    const stored = localStorage.getItem("savedJobs");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleSaveJob = (job) => {

    const exists = savedJobs.find((j) => j.id === job.id);

    if (exists) {
      setSavedJobs(savedJobs.filter((j) => j.id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job]);
    }

  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, toggleSaveJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
}

export const useSavedJobs = () => {
  return useContext(SavedJobsContext);
};