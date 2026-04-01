import React from "react";
import Prising1 from "./Prising1.jsx";
import Prising2 from "./Prising2.jsx";
import Prising3 from "./Prising3.jsx";

const PrisingSectionMain = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-30">
        Get Started in 3 Steps
      </h1>
      <p className="text-center text-gray-600 pb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 max-w-10/12 mx-auto">
        <Prising1 />
        <Prising2 />
        <Prising3 />
      </div>
    </div>
  );
};

export default PrisingSectionMain;
