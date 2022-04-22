import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import "./Contact.css";
import scrollToShop from "../logic/scrollToShop";

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ze3bmfc",
        "Default_Template",
        form.current,
        "iwCFiT7FYv44pEooo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setTimeout(() => {
      window.location.pathname = "/emailsent";
    }, 2500);
  };

  return (
    <div id="contact">
      <Navbar cart={props.cart} scrollToShop={scrollToShop} />

      <div id="contact__form">
        <img src="/images/emptycartimage.png" alt="" width="200px" />
        <form id="form" ref={form} onSubmit={sendEmail}>
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact__text"
            name="message"
            placeholder="Message"
            required
          />
          <input className="contact__button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
