"use client";

import React, { useState } from "react";
import Search from "@/components/Search";
import Jobs from "@/components/Jobs";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSearch = (jobSearch, locationSearch) => {
    // const results = await fetchJobsFromDatabase(jobSearch, locationSearch);
    // setSearchResults(results);
  };

  // const handleSearch = async (jobSearch, locationSearch) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.arbeitnow.com/jobs?title=${jobSearch}&location=${locationSearch}`
  //     );
  //     const data = response.data;
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error("Error performing search:", error);
  //   }
  // };

  return (
    <div className="overflow-hidden">
      <Search onSearch={handleSearch} />
      <Jobs
        jobs={searchResults}
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
      />
    </div>
  );
}
