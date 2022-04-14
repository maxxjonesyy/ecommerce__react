import React from "react";
import Homeslideshow from "../Homeslideshow";
import Navbar from "../Navbar";
import Shop from "../Shop";
import "../pages/Home.css";

function Home(props) {
  function scrollToShop() {
    window.scroll({
      top: "2000",
      behavior: "smooth"
    });
  }

  return (
    <div id="home">
      <Navbar scrollToShop={scrollToShop} cart={props.cart} />
      <Homeslideshow scrollToShop={scrollToShop} />
      <Shop />
    </div>
  );
}

export default Home;
