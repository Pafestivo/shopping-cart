import React from "react";
import ItemCard from "./itemCard";
import Items from "../data/items";
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
      {Items.map(item => {
        return <ItemCard src={item.images[0]} name={item.name} price={item.price} key={item.id}/>
      })}
      </div>
    </div>
  )
}

export default Shop