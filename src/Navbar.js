import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Navbar(props) {
  return (
    <nav>
      <div className="hamburger__menu">
        <HamburgerMenu cart={props.cart} />
      </div>

      <div id="navbar">
        <div className="logo__header">
          <img src="/images/logo.svg" alt="" width="250vw" />
          <h1>FUJI APPAREL</h1>
        </div>

        <div className="navLinks__cart">
          <ul>
            <li>
              <Link className="nav__link" to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav__link" onClick={props.scrollToShop}>
              Shop
            </li>

            <li
              className="nav__link"
              onClick={() => {
                window.location.pathname = "/about";
              }}
            >
              About
            </li>
            <li
              className="nav__link"
              onClick={() => {
                window.location.pathname = "/contact";
              }}
            >
              Contact
            </li>
          </ul>
          <div className="basket__container">
            <Link to={"/basket"}>
              <ShoppingCartIcon fontSize="large" />
            </Link>
          </div>

          <span className="basket__counter">{props.cart.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
