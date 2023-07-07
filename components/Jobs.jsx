"use client";

import useFetch from "@/hook/useFetch";
// import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const Jobs = ({ savedJobs, setSavedJobs }) => {
  const { data: jobs, isLoading, error } = useFetch();

  console.log(jobs);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return description;
  };

  // handle apply button
  const handleApply = (url) => {
    window.open(url, "_blank");
  };

  // handle save button
  const handleSaveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  return (
    <div className="flex gap-10 justify-center flex-wrap items-center py-10">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.slug}
            className="group w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-orange-400 shadow-lg shadow-gray-400 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-black  group-hover:text-white ">
                {job.title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                Time: {job.created_at}
              </span>
            </span>

            <h6 className="text-[#ccc]">Location: {job.location}</h6>

            <p
              key={`desc-${job.id}`}
              className="text-[13px] text-[#959595] pt-[20px mt-[20px] group-hover:text-white "
            >
              {truncateDescription(job.description)}
            </p>

            <div className="company flex items-center gap-2">
              {/* <Image src={job.companyImage} alt="Company" className="w-[10%]" /> */}
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {job.company_name}
              </span>
            </div>

            {/* Apply button */}
            <button
              className="bg-orange-400 hover:bg-orange-200 text-white rounded-lg px-4 py-2 mt-4"
              onClick={() => handleApply(job.url)}
            >
              Apply{" "}
              <BsArrowRightShort className="inline-block ml-1 border-[2px] rounded-[10px] p-[10px]" />
            </button>
            <button
              className="bg-orange-400 hover:bg-orange-200 text-white rounded-lg px-4 py-2 mt-4 mr-1"
              onClick={() => handleSaveJob(job)}
            >
              Save <BsArrowRightShort className="inline-block ml-1" />
            </button>
          </div>
        ))
      ) : (
        <p>Loading available jobs...</p>
      )}
    </div>
  );
};

export default Jobs;
