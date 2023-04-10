import React from "react";
import ItemCard from "./itemCard";
import Items from "../data/items";
import ShopSidebar from "./shop categories/ShopSidebar";
import '../styles/shop.css';

const Shop = () => {
  return(
    <div className="shop">
      <ShopSidebar category={'All Products'} />

      <div className="display">
      {Items.map(item => {
        return <ItemCard src={item.images[0]} name={item.name} price={item.price} key={item.id}/>
      })}
      </div>
    </div>
  )
}

export default Shop