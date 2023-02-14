import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url:("https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        height: "100vh",
      }}
    >
      <div className="home-text">
        <h2 className="home-title">PUSH YOUR TONE</h2>
        <p>TONES YOU'LL WANT TO KEEP GOING FOREVER</p>
        <Link to="/shop">
          <button className="btn shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
