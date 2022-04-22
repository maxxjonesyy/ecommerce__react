import Navbar from "../Navbar";
import "./Basket.css";
import usePushCart from "../logic/usePushCart";
import Button from "@mui/material/Button";
import scrollToShop from "../logic/scrollToShop";

function Basket() {
  const { cart, updateCart, emptyCart, removeCartItem } = usePushCart();

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

  function conditionalBasket() {
    if (cart.length !== 0) {
      return (
        <div id="basket">
          <Navbar
            cart={cart}
            updateCart={updateCart}
            scrollToShop={scrollToShop}
          />
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

                <h3 className="product__name">{product.data.name}</h3>
                <h3 className="product__size">
                  {convertSizeString(product.size)}
                </h3>
                <h3 className="product__price">${product.data.price}</h3>
                <Button
                  variant="contained"
                  disableElevation={true}
                  size="small"
                  className="remove__item"
                  onClick={() => {
                    removeCartItem(product);
                  }}
                >
                  Remove
                </Button>
              </div>
            );
          })}

          <div className="cart__bottom__container">
            <Button
              className="empty__cart"
              disableElevation={true}
              variant="contained"
              size="small"
              onClick={() => {
                emptyCart();
              }}
            >
              Clear Cart
            </Button>
            <h4>Order Total: ${totalCartPrice.toFixed(2)}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div id="basket">
          <Navbar
            cart={cart}
            updateCart={updateCart}
            scrollToShop={scrollToShop}
          />
          <div className="emptyCart__display">
            <h3>Your cart is empty...</h3>
            <img
              className="emptyCart_image"
              src="../images/emptycartimage.png"
              alt="empty cart"
            ></img>
          </div>
        </div>
      );
    }
  }

  return conditionalBasket();
}

export default Basket;

{
  /* <div id="basket">
<Navbar cart={cart} updateCart={updateCart} scrollToShop={scrollToShop} />
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
      <h3>${product.data.price}</h3>
      <Button
        variant="contained"
        disableElevation={true}
        size="small"
        className="remove__item"
        onClick={() => {
          removeCartItem(product);
        }}
      >
        Remove
      </Button>
    </div>
  );
})}

<div className="cart__bottom__container">
  <Button
    className="empty__cart"
    disableElevation={true}
    variant="contained"
    size="small"
    onClick={() => {
      emptyCart();
    }}
  >
    Clear Cart
  </Button>
  <h4>Order Total: ${totalCartPrice.toFixed(2)}</h4>
</div>
</div> */
}
