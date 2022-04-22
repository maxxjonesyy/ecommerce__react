import React from "react";
import Navbar from "../Navbar";
import scrollToShop from "../logic/scrollToShop";

function ContactSuccess(props) {
  return (
    <div id="contact">
      <Navbar cart={props.cart} scrollToShop={scrollToShop} />

      <div id="contact__form">
        <img src="/images/emptycartimage.png" alt="" width="200px" />

        <div className="email__sent">
          <h1>Your email has been sent!</h1>
          <h5>We will get in contact with you as swiftly as possible.</h5>
        </div>
      </div>
    </div>
  );
}

export default ContactSuccess;
