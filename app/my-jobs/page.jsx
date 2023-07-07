"use client";

import React, { useState } from "react";
import SavedJobs from "@/components/SavedJobs";

const MyJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  return (
    <div>
      <SavedJobs savedJobs={savedJobs} />
    </div>
  );
};

export default MyJobs;
