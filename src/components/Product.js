import React from "react";

const Product = ({
  product,
  cartItems,
  onIncrement,
  onDecrement,
  onClearItem,
}) => {
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
        <div className="added-to-cart-btns">
          <div className="add-remove-btns">
            <button
              className="btn add-remove-btn qty-btn"
              onClick={() => onDecrement(product)}
            >
              -
            </button>
            <span>{isInTheCart.qty}</span>
            <button
              className="btn add-remove-btn qty-btn"
              onClick={() => onIncrement(product)}
            >
              +
            </button>
          </div>
          <span onClick={() => onClearItem(product)} className="remove-icon">
            Remove
          </span>
        </div>
      ) : (
        <button
          onClick={() => onIncrement(product)}
          className="btn add-to-cart-btn"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
