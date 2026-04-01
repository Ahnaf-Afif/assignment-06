import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, handleRemoveFromCart, setCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price.amount, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <div className="max-w-9/12 mx-auto mt-10 p-10 shadow-lg rounded-lg bg-base-200">
            <p className="text-2xl font-bold mb-4">Your Cart</p>
            <p className="text-2xl font-bold mb-4 text-center">
              Your cart is empty.
            </p>
            <div className="flex justify-between items-center pt-10 pb-5">
              <p>Total</p>
              <p className="font-bold text-xl">$0</p>
            </div>
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
            <p className="font-bold text-xl">${total}</p>
          </div>
          <button
            onClick={() => setCheckout(true)}
            className="btn btn-primary rounded-full w-full"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
