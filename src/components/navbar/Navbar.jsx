import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
        <div className="navbar-start pl-20 text-4xl md:text-xl font-bold">
          <a className=" btn-ghost text-xl">DigiTools</a>
        </div>
        <div className="navbar-center md:hidden lg:block hidden">
          <div className="flex gap-4 text-sm">
            <p>Products</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="navbar-end flex gap-4 items-center pr-20 ">
          <FaCartShopping className="hidden md:block" />
          <p className="hidden md:block">Login</p>
          <button className="btn btn-primary rounded-full hidden md:block">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
