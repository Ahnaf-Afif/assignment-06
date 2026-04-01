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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };
  const handleRemoveFromCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
      toast.info(`${product.name} is removed from cart`);
    }
  };

  const setCheckout = () => {
    setCart([]);
    toast.success("Checkout successful");
  };

  return (
    <div data-theme="light" className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <UserRating />
      <ToastContainer />
      <DigitalTools
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        cart={cart}
      />
      {activeTab === "products" ? (
        <ProductList handleAddToCart={handleAddToCart} />
      ) : (
        <Cart
          cart={cart}
          setCheckout={setCheckout}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
      <GetStarted />
      <GetStartedCard />
      <PrisingSectionMain />
      <Footer />
    </div>
  );
};

export default App;
