import React from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";

const Header = () => {
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

          <p>Cart</p>
          
        </nav>
      </div>
    </div>
  )
}

export default Header