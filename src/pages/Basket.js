import React from "react";
import Navbar from "../Navbar";
import "./Basket.css";
import usePushCart from "../logic/usePushCart";
import Button from "@mui/material/Button";

function Basket() {
  const { cart, updateCart, emptyCart } = usePushCart();

  let totalCartPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart !== []) {
      totalCartPrice += cart[i].data.price;
    }
  }

  function convertSizeString(string) {
    if (/\s/.test(string)) {
      let convertedString = string.slice(0, 3).replace(/\s/g, "");
      return convertedString;
    } else {
      let convertedString = string.slice(0, 1);
      return convertedString;
    }
  }

  return (
    <div id="basket">
      <Navbar cart={cart} updateCart={updateCart} />
      <div className="basket__header">
        <h1>Shopping Cart:</h1>
        <h1>Items: {cart.length}</h1>
      </div>

      {cart.map((product, index) => {
        return (
          <div className="basket__content__container" key={index}>
            <div className="basket__image">
              <img src={product.data.image} alt="product" />
            </div>
            <h3>{product.data.name}</h3>

            <h3 className="product__size">{convertSizeString(product.size)}</h3>

            <div className="amount__container">
              <Button
                variant="outlined"
                disableElevation={true}
                size="small"
                className="amount__decrease"
              >
                -
              </Button>
              <h5>Amount</h5>
              <Button
                variant="outlined"
                disableElevation={true}
                size="small"
                className="amount__increase"
              >
                +
              </Button>
            </div>
            <h3>${product.data.price}</h3>
          </div>
        );
      })}
      <div className="cart__bottom__container">
        <Button
          className="empty__cart"
          variant="outlined"
          size="small"
          onClick={() => {
            emptyCart();
          }}
        >
          Clear Cart
        </Button>
        <h4>Order Total: ${totalCartPrice}</h4>
      </div>
    </div>
  );
}

export default Basket;
