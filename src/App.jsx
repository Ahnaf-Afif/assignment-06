import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import UserRating from "./components/UserRating/UserRating.jsx";
import ProductCard from "./components/Products/ProductCard.jsx";
import ProductList from "./components/Products/ProductList.jsx";
import DigitalTools from "./components/DigitalTools/DigitalTools.jsx";
import Cart from "./components/Cart/Cart.jsx";
import GetStartedCard from "./components/GetStarted/GetStartedCard.jsx";
import { useState } from "react";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import PrisingSectionMain from "./components/PrisingSection/PrisingSectionMain.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };
  return (
    <div data-theme="light" className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <UserRating />
      <DigitalTools
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        cart={cart}
      />
      {activeTab === "products" ? (
        <ProductList handleAddToCart={handleAddToCart} />
      ) : (
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      )}
      <GetStarted />
      <GetStartedCard />
      <PrisingSectionMain />
      <Footer />
    </div>
  );
};

export default App;
