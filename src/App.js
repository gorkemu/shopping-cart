import React, { useReducer } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import data from "./data";
import itemsReducer from "./reducers/itemsReducer";

const App = () => {
  const { products } = data;
  const [cartItems, dispatch] = useReducer(itemsReducer, []);

  const handleIncrementItem = (item) => {
    dispatch({
      type: "incremented",
      item: item,
    });
  };

  const handleDecrementItem = (item) => {
    dispatch({
      type: "decremented",
      item: item,
    });
  };

  const handleClearItem = (item) => {
    dispatch({
      type: "cleared",
      item: item,
    });
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
