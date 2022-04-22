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
  AlertTitle,
} from "@mui/material";

function Bt(props) {
  const btInfo = {
    data: props.products[0],
    size: props.value,
  };

  return (
    <div id="bt">
      <div className="page__container">
        <Navbar
          cart={props.cart}
          updateCart={props.updateCart}
          scrollToShop={scrollToShop}
        />

        <div className="product__container">
          <div className="product__left__container">
            <div className="product__photos">
              <img src={btInfo.data.image} alt="" />
              <img src="../images/products/bt_back.jpg" alt="" />
            </div>
          </div>

          <div className="product__right__container">
            <div className="info__heading">
              <h1>{btInfo.data.name}</h1>
            </div>

            <div className="info__price">
              <h3>${btInfo.data.price}</h3>
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
                Magpies are small birds that belong to the Corvidae family. It
                is known for smart, cunning and resourceful. Magpie people are
                very perceptive, sociable and intelligent. Those traits enable
                magpie people to communicate well and ascend to managing
                positions. The embroidered Sukajan hoodie is gorgeous and
                colorful, but simple composition.
              </p>
            </div>

            <Button
              variant="contained"
              className="add__to__cart__button"
              onClick={() => {
                if (props.value !== "") {
                  props.updateCart(btInfo);
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

export default Bt;
