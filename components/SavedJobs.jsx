import React from "react";

const SavedJobs = ({ savedJobs }) => {
  return (
    <div>
      <h1>Your Saved Jobs</h1>
      {savedJobs.length > 0 ? (
        savedJobs.map((job) => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company_name}</p>
            {/* Display other job details */}
          </div>
        ))
      ) : (
        <p>No saved jobs found.</p>
      )}
    </div>
  );
};

export default SavedJobs;
