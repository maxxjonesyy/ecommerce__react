import React from "react";
import Homeslideshow from "../Homeslideshow";
import Navbar from "../Navbar";
import Shop from "../Shop";
import "../pages/Home.css";
import scrollToShop from "../logic/scrollToShop";
import usePushCart from "../logic/usePushCart";

function Home() {
  const { cart } = usePushCart();

  return (
    <div id="home">
      <Navbar cart={cart} scrollToShop={scrollToShop} />
      <Homeslideshow scrollToShop={scrollToShop} />
      <Shop />
    </div>
  );
}

export default Home;
