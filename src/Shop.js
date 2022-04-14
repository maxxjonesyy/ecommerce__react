import { Button } from "@mui/material";
import React from "react";
import "./Shop.css";

function Shop() {
  return (
    <div id="shop">
      <div className="product__page__container">
        <div className="product_container">
          <img src="/images/products/bt_front.jpg" alt="clothing jumper" />
          <h2>Birds & Trees - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/bt"
          >
            MORE INFO
          </Button>
        </div>

        <div className="product_container">
          <img src="/images/products/gd_front.jpg" alt="clothing jumper" />
          <h2>Green Dragon - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/gd"
          >
            MORE INFO
          </Button>
        </div>

        <div className="product_container">
          <img src="/images/products/gp_front.jpg" alt="clothing jumper" />
          <h2>Golden Phoenix - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/gp"
          >
            MORE INFO
          </Button>
        </div>

        <div className="product_container">
          <img src="/images/products/gf_front.jpg" alt="clothing jumper" />
          <h2>Goldfish - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/gf"
          >
            MORE INFO
          </Button>
        </div>

        <div className="product_container">
          <img src="/images/products/se_front.jpg" alt="clothing jumper" />
          <h2>Success - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/se"
          >
            MORE INFO
          </Button>
        </div>

        <div className="product_container">
          <img src="/images/products/ts_front.jpg" alt="clothing jumper" />
          <h2>The Oni - Embroidered</h2>
          <p>$49.99</p>
          <Button
            variant="contained"
            className="moreInfo__button"
            href="/products/ts"
          >
            MORE INFO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
