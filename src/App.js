import "./App.css";
import React from "react";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./logic/Products";
import useSelectSize from "./logic/useSelectSize";
import usePushCart from "./logic/usePushCart";

import Bt from "./pages/Bt";
import Gd from "./pages/Gd";
import Gf from "./pages/Gf";
import Gp from "./pages/Gp";
import Se from "./pages/Se";
import Ts from "./pages/Ts";
import Basket from "./pages/Basket";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  const { value, handleSelectChange } = useSelectSize();
  const { cart, updateCart } = usePushCart();

  console.log(cart);

  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/products/bt"
            element={
              <Bt
                value={value}
                handleSelectChange={handleSelectChange}
                cart={cart}
                updateCart={updateCart}
                products={Products}
              />
            }
          />

          <Route
            path="/products/gd"
            element={
              <Gd
                value={value}
                handleSelectChange={handleSelectChange}
                cart={cart}
                updateCart={updateCart}
                products={Products}
              />
            }
          />
          <Route path="/products/gp" element={<Gp />} />
          <Route path="/products/gf" element={<Gf />} />
          <Route path="/products/se" element={<Se />} />
          <Route path="/products/ts" element={<Ts />} />
          <Route
            path="/basket"
            element={
              <Basket
                value=""
                handleSelectChange=""
                cart=""
                updateCart=""
                products={Products}
              />
            }
          />
          <Route
            path="/about"
            element={<About cart={cart} updateCart={updateCart} />}
          />
          <Route
            path=""
            element={<Home cart={cart} updateCart={updateCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
