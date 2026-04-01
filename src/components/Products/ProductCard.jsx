import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between flex-row-reverse">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <span>hi</span>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{product.name}</h2>
          </div>
          <div>{product.description}</div>
          <span className="text-xl">{product.price.label}</span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <ul>
              {product.features.map((feature) => {
                return (
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
          </ul>
          <div className="mt-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#5a2df7] to-[#c215ff]"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
