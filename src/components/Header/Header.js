import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navContainer">
      <h1>Welcome to T-MANIA</h1>
      <Link to="/home">Home</Link>
      <Link to="/orderreview">Order Review</Link>
      <Link to="/grandpa">Grandpa</Link>
    </nav>
  );
};

export default Header;
