import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start pl-20">
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
        <div className="navbar-end flex gap-4 items-center pr-20">
          <FaCartShopping />
          <p>Login</p>
          <button className="btn btn-primary rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
