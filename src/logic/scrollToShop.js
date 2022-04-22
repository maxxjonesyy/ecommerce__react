function scrollToShop() {
  if (window.location.pathname === "/") {
    const shop = document.querySelector("#shop");
    shop.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.pathname = "/";
  }
}

export default scrollToShop;
