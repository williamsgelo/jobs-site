import React from "react";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-orange-400 rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Hire</strong>Me
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always strive to provide the best jobs around the globe for our job
          seekers and help employers to find the best talent.
        </p>
      </div>

      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Profile</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">My Jobs</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
