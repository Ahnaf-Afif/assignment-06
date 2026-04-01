import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="max-w-9/12 mx-auto mt-10 p-10 shadow-lg rounded-lg bg-base-200">
        <p className="text-2xl font-bold mb-4">Your Cart</p>
        <div className="flex justify-between items-center bg-base-300 p-4 rounded-lg">
          <div>
            <p>AI Writing Pro</p>
            <p className="text-sm text-gray-500">$29/Mo</p>
          </div>
          <div>
            <button className=" text-red-500 cursor-pointer">Remove</button>
          </div>
        </div>
        <div className="flex justify-between items-center pt-10 pb-5">
          <p>Total</p>
          <p className="font-bold text-xl">$29</p>
        </div>
        <button className="btn btn-primary rounded-full w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
