import React from "react";
import Product from "./Product";

const Shop = (props) => {
  const { products, onAdd } = props;

  return (
    <div className="Shop">
      <div className="products">
        <h2>Amplifiers & Effects</h2>
        <hr />
        <div className="products-list">
          {products.map((product) => (
            <Product onAdd={onAdd} key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
