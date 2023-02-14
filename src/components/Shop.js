import React from "react";
import Product from "./Product";

const Shop = (props) => {
  const { products, cartItems, onAdd, onRemove, onRemoveAll } = props;

  return (
    <div className="Shop">
      <div className="products">
        <h2>Amplifiers & Effects</h2>
        <hr />
        <div className="products-list">
          {products.map((product) => (
            <Product
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
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
