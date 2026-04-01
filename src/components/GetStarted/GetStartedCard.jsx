import React from "react";
import User from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Package from "../../assets/package.png";

const GetStartedCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-10/12 mx-auto">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="ml-80 mt-10">
          <div className=" text-xl px-2.5 py-2 bg-purple-600 text-white rounded-full w-fit">
            01
          </div>
        </div>
        <div className="card-body mt items-center text-center">
          <figure className="p-4 bg-purple-100 rounded-full">
            <img src={User} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Create Account</h2>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body mt items-center text-center">
          <div className="ml-80 mt-2">
            <div className=" text-xl px-2.5 py-2 bg-purple-600 text-white rounded-full w-fit">
              02
            </div>
          </div>
          <figure className="p-4 bg-purple-100 rounded-full">
            <img src={Package} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Choose Products</h2>
          <p>
            Browse our catalog and select the tools <br /> that fit your needs.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body mt items-center text-center">
          <div className="ml-80 mt-2">
            <div className=" text-xl px-2.5 py-2 bg-purple-600 text-white rounded-full w-fit">
              03
            </div>
          </div>
          <figure className="p-4 bg-purple-100 rounded-full">
            <img src={Rocket} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Start Creating</h2>
          <p>
            Download and start using your premium <br /> tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
