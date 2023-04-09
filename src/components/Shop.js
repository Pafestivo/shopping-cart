import React from "react";
import '../styles/shop.css';

const Shop = () => {
  return(
    <div className="shop">
      <div className="sidebar">
        <div className="current-view">
          <h1>shop/</h1>
          <h1>All Products</h1>
        </div>
        <div className="categories">
          <h1>Food</h1>
          <h1>Equipment</h1>
          <h1>Toys</h1>
          <h1>Kennels</h1>
        </div>
      </div>

      <div className="display">
        <div className="item-card"></div>
        <div className="item-card"></div>
        <div className="item-card"></div>
        <div className="item-card"></div>
        <div className="item-card"></div>
        <div className="item-card"></div>
      </div>
    </div>
  )
}

export default Shop