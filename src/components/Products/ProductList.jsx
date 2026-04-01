import React from "react";

import data from "../../data/products.json";

import ProductCard from "./ProductCard";

const products = data.products;

const ProductList = ({ handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-11/12 mx-auto my-10">
      {products.map((product) => {
        return (
          <ProductCard
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
