import { Button } from "@mui/material";
import React from "react";
import "./Homeslideshow.css";

function Homeslideshow({ scrollToShop }) {
  return (
    <div id="homeslideshow">
      <div className="shop__button__container">
        <Button
          variant="contained"
          className="shop__button"
          onClick={scrollToShop}
        >
          SHOP
        </Button>
      </div>
      <div className="slideshow__container">
        <img className="slide" src="/images/slide1.jpg" alt="slide" />
        <img className="slide" src="/images/slide2.jpg" alt="slide" />
        <img className="slide" src="/images/slide3.jpg" alt="slide" />
        <img className="slide" src="/images/slide4.jpg" alt="slide" />
      </div>
    </div>
  );
}

export default Homeslideshow;
