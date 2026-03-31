import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import UserRating from "./components/UserRating/UserRating.jsx";
import ProductCard from "./components/Products/ProductCard.jsx";
import ProductList from "./components/Products/ProductList.jsx";
import DigitalTools from "./components/DigitalTools/DigitalTools.jsx";

const App = () => {
  return (
    <div data-theme="light" className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <UserRating />
      <DigitalTools />
      <ProductList />
    </div>
  );
};

export default App;
