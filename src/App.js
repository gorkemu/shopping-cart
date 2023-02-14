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

  const addItem = (item) => {
    const alreadyInTheCart = cartItems.find((x) => x.id === item.id);
    if (alreadyInTheCart) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const alreadyInTheCart = cartItems.find((x) => x.id === item.id);
    if (alreadyInTheCart.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty - 1 }
            : x
        )
      );
    }
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
                onAdd={addItem}
                onRemove={removeItem}
                products={products}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                onAdd={addItem}
                onRemove={removeItem}
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
