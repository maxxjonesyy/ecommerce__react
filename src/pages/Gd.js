import React from "react";
import "../pages/ProductStyle.css";
import Navbar from "../Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from "@mui/material";

function Gd(props) {
  const gdInfo = {
    data: props.products[1],
    size: props.value
  };

  return (
    <div id="gd">
      <Navbar cart={props.cart} updateCart={props.updateCart} />
      <div className="product__container">
        <div className="product__left__container">
          <div className="product__photos">
            <img src={gdInfo.data.image} alt="" />
            <img src="../images/products/gd_back.jpg" alt="" />
          </div>
        </div>

        <div className="product__right__container">
          <div className="info__heading">
            <h1>{gdInfo.data.name}</h1>
          </div>

          <div className="info__price">
            <h3>${gdInfo.data.price}</h3>
          </div>

          <div className="sizing__dropdown">
            <FormControl fullWidth>
              <InputLabel>Select Size</InputLabel>
              <Select
                value={props.value}
                label="Select Size"
                onChange={props.handleSelectChange}
              >
                <MenuItem value="SMALL">SMALL</MenuItem>
                <MenuItem value="MEDIUM">MEDIUM</MenuItem>
                <MenuItem value="LARGE">LARGE</MenuItem>
                <MenuItem value="X LARGE">X LARGE</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="sizing__heading">
            <h5>You Selected: {props.value}</h5>
          </div>
          <div className="description">
            <p>
              Magpies are small birds that belong to the Corvidae family. It is
              known for smart, cunning and resourceful. Magpie people are very
              perceptive, sociable and intelligent. Those traits enable magpie
              people to communicate well and ascend to managing positions. The
              embroidered Sukajan hoodie is gorgeous and colorful, but simple
              composition.
            </p>
          </div>

          <Button
            variant="contained"
            className="add__to__cart__button"
            onClick={() => {
              if (props.value !== "") {
                props.updateCart(gdInfo);
              } else {
                alert("Please select a size to add a product to cart");
              }
            }}
          >
            <div className="cart__icon">
              <ShoppingCartIcon />
            </div>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Gd;
