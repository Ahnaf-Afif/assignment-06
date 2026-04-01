import React from "react";

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-base-300 p-4 rounded-lg mb-4">
        <div>
          <p className=" font-bold pb-2">{item.name}</p>
          <p className="text-sm text-gray-500">{item.price.label}</p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveFromCart(item)}
            className=" text-red-500 cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
