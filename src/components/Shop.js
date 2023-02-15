import React from "react";
import Product from "./Product";

const Shop = ({
  products,
  cartItems,
  onIncrement,
  onDecrement,
  onClearItem,
}) => {
  return (
    <div className="Shop">
      <div className="products">
        <h2>Amplifiers & Effects</h2>
        <hr />
        <div className="products-list">
          {products.map((product) => (
            <Product
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onClearItem={onClearItem}
              key={product.id}
              product={product}
              cartItems={cartItems}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
