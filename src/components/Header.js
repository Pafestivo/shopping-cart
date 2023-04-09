import React from "react";
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="head-container">
        <h1>Petsy</h1>
        <nav>
          <p>Contact</p>
          <p>Shop</p>
          <p>Cart</p>
        </nav>
      </div>
    </div>
  )
}

export default Header