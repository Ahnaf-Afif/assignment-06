import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import heroImage from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center max-w-8/12 mx-auto my-15">
      <div className="space-y-5">
        <p className="text-sm text-purple-600 bg-blue-300 max-w-fit py-1 px-2 rounded-full flex justify-center items-center gap-1">
          <FaRegDotCircle /> New: AI-Powered Tools Available
        </p>
        <h1 className="text-5xl font-bold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-sm text-gray-500 opacity-80">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn btn-primary rounded-full">
            <FaSearch /> Explore Products
          </button>
          <button className="btn btn-outline rounded-full">
            {" "}
            <FaPlay /> Watch Demo
          </button>
        </div>
      </div>
      <div className="max-w-sm">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
