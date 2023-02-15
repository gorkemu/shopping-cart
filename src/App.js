import React, { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import data from "./data";

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleIncrementItem = (item) => {
    const alreadyInTheCart = cartItems.find((x) => x.id === item.id);
    if (alreadyInTheCart) {
      setCartItems(
        cartItems
          .slice()
          .map((x) =>
            x.id === item.id
              ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty + 1 }
              : x
          )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const handleDecrementItem = (item) => {
    const alreadyInTheCart = cartItems.find((x) => x.id === item.id);
    if (alreadyInTheCart.qty === 1) {
      setCartItems(cartItems.slice().filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems
          .slice()
          .map((x) =>
            x.id === item.id
              ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty - 1 }
              : x
          )
      );
    }
  };

  const handleClearItem = (item) => {
    setCartItems(cartItems.slice().filter((x) => x.id !== item.id));
  };

  return (
    <HashRouter>
      <div className="App">
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                onIncrement={handleIncrementItem}
                onDecrement={handleDecrementItem}
                onClearItem={handleClearItem}
                products={products}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                onIncrement={handleIncrementItem}
                onDecrement={handleDecrementItem}
                onClearItem={handleClearItem}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
