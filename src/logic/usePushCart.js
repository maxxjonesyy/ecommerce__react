import { useEffect, useState } from "react";

function usePushCart() {
  function returnStoredCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    return savedCart;
  }
  const [cart, setCart] = useState(returnStoredCart());

  function updateCart(object) {
    return setCart([object, ...cart]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function emptyCart() {
    if (cart.length !== 0) {
      return setCart([]);
    } else if (cart.length === 0) {
      alert("Your cart is empty, try adding some products!");
    }
  }

  function removeCartItem(productToRemove) {
    return setCart(cart.filter((product) => product !== productToRemove));
  }

  return {
    cart,
    updateCart,
    emptyCart,
    removeCartItem,
  };
}

export default usePushCart;
