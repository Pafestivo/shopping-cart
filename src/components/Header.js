import React from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";

const Header = ({ cartLength }) => {

  return (
    <div className="header">
      <div className="head-container">
        <Link to='/'>
          <h1>Petsy</h1>
        </Link>
        
        <nav>
          <Link to='/contact'>
            <p>Contact</p>
          </Link>
          
          <Link to='/shop'>
          <p>Shop</p>
          </Link>

          <Link to='/cart'>
            <p className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count">{cartLength}</span>
            </p>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header