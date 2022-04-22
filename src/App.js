import "./App.css";
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
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  const { value, handleSelectChange } = useSelectSize();
  const { cart, updateCart } = usePushCart();

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
          <Route
            path="/products/gp"
            element={
              <Gp
                value={value}
                handleSelectChange={handleSelectChange}
                updateCart={updateCart}
                cart={cart}
                products={Products}
              />
            }
          />
          <Route
            path="/products/gf"
            element={
              <Gf
                value={value}
                handleSelectChange={handleSelectChange}
                updateCart={updateCart}
                cart={cart}
                products={Products}
              />
            }
          />
          <Route
            path="/products/se"
            element={
              <Se
                value={value}
                handleSelectChange={handleSelectChange}
                cart={cart}
                updateCart={updateCart}
                products={Products}
              />
            }
          />
          <Route
            path="/products/ts"
            element={
              <Ts
                cart={cart}
                value={value}
                handleSelectChange={handleSelectChange}
                updateCart={updateCart}
                products={Products}
              />
            }
          />
          <Route
            path="/basket"
            element={<Basket value={value} cart={cart} products={Products} />}
          />

          <Route path="/contact" element={<Contact cart={cart} />} />
          <Route path="/emailsent" element={<ContactSuccess cart={cart} />} />

          <Route
            path="/about"
            element={<About cart={cart} updateCart={updateCart} />}
          />
          <Route path="" element={<Home updateCart={updateCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
