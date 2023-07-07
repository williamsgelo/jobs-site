"use client";

import React, { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = ({ onSearch }) => {
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(jobSearch, locationSearch);
  };

  return (
    <div className="searchBar grid gap-10 bg-gray-100 rounded-[10px] p-[3rem]">
      <form onSubmit={handleSubmit}>
        <div className="fistDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-1 shadow-lg shadow-gray-100">
          <div className="flex gap-2 items-center w-full sm:w-auto">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-orange focus:outline-none w-full sm:w-auto"
              placeholder="Search Job Here..."
              value={jobSearch}
              onChange={(e) => setJobSearch(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-teal-950 icon"
              onClick={() => setJobSearch("")}
            />
          </div>

          <div className="flex gap-2 items-center w-full sm:w-auto">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-orange focus:outline-none w-full sm:w-auto "
              placeholder="Search by location..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-teal-950 icon"
              onClick={() => setLocationSearch("")}
            />
          </div>

          <button className="bg-orange-400 h-full p-3 px-5 rounded-lg text-white cursor-pointer hover:bg-orange-200">
            Find Jobs
          </button>
        </div>
      </form>

      <div className="secDiv flex flex-wrap items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>

          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
