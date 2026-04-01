import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <div className="max-w-9/12 mx-auto mt-10 p-10 shadow-lg rounded-lg bg-base-200">
            <p className="text-2xl font-bold mb-4">Your Cart</p>
            <div className="flex justify-between items-center pt-10 pb-5">
              <p>Total</p>
              <p className="font-bold text-xl">$0</p>
            </div>
            <button className="btn btn-primary rounded-full w-full">
              Cart is empty
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-9/12 mx-auto mt-10 p-10 shadow-lg rounded-lg bg-base-200">
          <p className="text-2xl font-bold mb-4">Your Cart</p>
          <div>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <div className="flex justify-between items-center pt-10 pb-5">
            <p>Total</p>
            <p className="font-bold text-xl">$29</p>
          </div>
          <button className="btn btn-primary rounded-full w-full">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
