import React from "react";
import Navbar from "../Navbar";
import "../pages/About.css";
import scrollToShop from "../logic/scrollToShop";

function About(props) {
  return (
    <div id="about">
      <div className="about__container">
        <div>
          <Navbar
            cart={props.cart}
            updateCart={props.updateCart}
            scrollToShop={scrollToShop}
          />
        </div>

        <div className="about__me__container">
          <div className="about__me__portrait">
            <img src="/images/portrait.jpg" alt="" />
          </div>
          <div className="about__me__text">
            <h1>About me.</h1>
            <p>
              My name is Brody, I'm a 21 year old from Sydney who bought an
              embroidery machine to make cool custom jumper for my friends. This
              quickly turned into a business opportunity, hence why you're now
              reading this!
              <br />
              <br />
              They're all done in house (literally), hand made by myself and
              shipped Australia wide. If you have any questions or order
              enquiries, get in contact and I'll do my best to sort you out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
