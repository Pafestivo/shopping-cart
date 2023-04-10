import React from "react";
import { Link } from "react-router-dom";

const ShopSidebar = ({ category }) => {
  return (
    <div className="sidebar">
      <div className="current-view">
        <h1>shop/</h1>
        <h1>{category}</h1>
      </div>
      <div className="categories">
        <Link to="/shop/food">
          <h1>Food</h1>
        </Link>

        <Link to="/shop/equipment">
          <h1>Equipment</h1>
        </Link>

        <Link to="/shop/toys">
          <h1>Toys</h1>
        </Link>

        <Link to="/shop/kennels">
          <h1>Kennels</h1>
        </Link>
      </div>
    </div>
  )
}

export default ShopSidebar