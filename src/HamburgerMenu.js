import React from "react";
import "./HamburgerMenu.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

function HamburgerModal(props) {
  function scrollToShopHam() {
    const hamburgerIcon = document.querySelector(".hamburger-react");
    const linksContainer = document.querySelector(
      ".hamburger__links__container"
    );

    hamburgerIcon.click();

    window.scroll({
      top: "2000",
      behavior: "smooth"
    });

    linksContainer.classList.add("hide");
  }

  function hamburgerOpenClose() {
    const linksContainer = document.querySelector(
      ".hamburger__links__container"
    );

    const scroll = document.querySelector("*");

    if (linksContainer.classList.contains("hide")) {
      linksContainer.classList.remove("hide");
      scroll.style.overflow = "hidden";
    } else {
      linksContainer.classList.add("hide");
      scroll.style.overflow = "visible";
    }
  }

  function hamCloseLinkClick() {
    const hamburgerIcon = document.querySelector(".hamburger-react");
    const linksContainer = document.querySelector(
      ".hamburger__links__container"
    );

    hamburgerIcon.click();

    linksContainer.classList.add("hide");
  }

  return (
    <div>
      <div id="hamburger__nav">
        <div className="hamburger__left">
          <img src="/images/logo.svg" alt="" width="200px" />
          <h1>FUJI APPAREL</h1>
        </div>

        <div className="hamburger__right">
          <div className="hamburger__icon" onClick={hamburgerOpenClose}>
            <Hamburger rounded={true} />
          </div>
        </div>
      </div>

      <div className="hamburger__links__container hide">
        <ul className="hamburger__links">
          <li onClick={hamCloseLinkClick}>
            <Link className="ham__link" to={"/"}>
              Home
            </Link>
          </li>
          <li onClick={scrollToShopHam}>
            <Link className="ham__link" to={"/"}>
              Shop
            </Link>
          </li>
          <li onClick={hamCloseLinkClick}>
            <Link className="ham__link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="ham__link" onClick={hamCloseLinkClick}>
            Contact
          </li>
          <li className="ham__cart ham__link" onClick={hamCloseLinkClick}>
            <div className="basket__container">
              <Link to={"/basket"}>
                <ShoppingCartIcon fontSize="large" />
              </Link>
            </div>
            <span className="basket__counter">{props.cart.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerModal;
