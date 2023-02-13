import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Nav = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <div>Pedal Shop</div>
      </Link>
      <ul className="nav-links">
        <NavLink to="/" className="NavLink">
          Home
        </NavLink>
        <NavLink to="/shop" className="NavLink">
          Shop
        </NavLink>
        <NavLink to="/cart" className="NavLink nav-cart">
          <i className="nav-cart-icon">
            <FiShoppingCart />
          </i>
          <span className="nav-cart-count">3</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
