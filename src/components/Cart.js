import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Cart = ({ cartItems, onIncrement, onDecrement, onClearItem }) => {
  const totalPrice = cartItems.reduce(
    (accumulator, current) => accumulator + current.qty * current.price,
    0
  );

  return (
    <div className="Cart">
      <div className="Shopping-Cart">
        <h2>Your Shopping Cart</h2>
        <hr />
        <div>
          {cartItems.length === 0 && (
            <div className="empty-cart-text">Your cart is empty</div>
          )}
        </div>
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              ></img>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-btns">
                <button
                  className="btn qty-btn"
                  onClick={() => onDecrement(item)}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="btn qty-btn"
                  onClick={() => onIncrement(item)}
                >
                  +
                </button>
              </div>
              <span
                onClick={() => onClearItem(item)}
                className="remove-icon-in-cart"
              >
                Remove
              </span>
              <div className="cart-item-price">
                {item.qty} x ${item.price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="shopping-cart-sub-total">
          Subtotal ({cartItems.length} items): ${totalPrice.toLocaleString()}
        </div>
      </div>
      <div className="buy-box">
        <h3>
          Subtotal ({cartItems.length} items): ${totalPrice.toLocaleString()}
        </h3>
        <div>
          The prices shown include VAT.<span>{<br />}</span> The price in $ is a
          guideline price only!
        </div>
        <button className="btn checkout-btn">
          <span>TO CHECKOUT</span>
          <BsArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
