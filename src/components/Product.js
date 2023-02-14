import React from "react";

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="Product">
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      ></img>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price.toLocaleString()}</div>
      <button onClick={() => onAdd(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
