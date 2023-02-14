import React from "react";

const Product = (props) => {
  const { product, cartItems, onAdd, onRemove } = props;

  const isInTheCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="Product">
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      ></img>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price.toLocaleString()}</div>
      {isInTheCart ? (
        <div className="add-remove-btns">
          <button
            className="btn add-remove-btn qty-btn"
            onClick={() => onRemove(product)}
          >
            -
          </button>
          <span>{isInTheCart.qty}</span>
          <button
            className="btn add-remove-btn qty-btn"
            onClick={() => onAdd(product)}
          >
            +
          </button>
        </div>
      ) : (
        <button onClick={() => onAdd(product)} className="btn add-to-cart-btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
