import React from "react";
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="head-container">
        <h1>Petsy</h1>
        <nav>
          <p>Shop</p>
          <p>Cart</p>
          <p>Contact</p>
        </nav>
      </div>
    </div>
  )
}

export default Header