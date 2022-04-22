import React from "react";
import "../pages/ProductStyle.css";
import Navbar from "../Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import scrollToShop from "../logic/scrollToShop";
import swal from "sweetalert";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

function Gd(props) {
  const gdInfo = {
    data: props.products[1],
    size: props.value,
  };

  return (
    <div id="gd">
      <div className="page__container">
        <Navbar
          cart={props.cart}
          updateCart={props.updateCart}
          scrollToShop={scrollToShop}
        />
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
                Dragon is well known as a fierce and formidable legendary
                creature but it is also a symbol of monarch in Eastern world.
                You will be amazed at the nobility and benevolence when they are
                embroidered on the sleeves of our Dragon Sleeves Hoodie.
              </p>
            </div>

            <Button
              variant="contained"
              className="add__to__cart__button"
              onClick={() => {
                if (props.value !== "") {
                  props.updateCart(gdInfo);
                  swal({
                    title: "Added to cart!",
                    icon: "success",
                    className: "alert_box",
                  });
                } else {
                  swal({
                    title: "Please select a size",
                    icon: "error",
                    className: "alert_box",
                  });
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
    </div>
  );
}

export default Gd;
