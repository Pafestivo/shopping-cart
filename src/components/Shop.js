import React from "react";
import ItemCard from "./itemCard";
import Items from "../data/items";
import ShopSidebar from "./shop categories/ShopSidebar";
import '../styles/shop.css';
import { Link } from "react-router-dom";

const Shop = () => {
  return(
    <div className="shop">
      <ShopSidebar category={'All Products'} />

      <div className="display">
      {Items.map(item => {
        return (
          <Link to={`${item.id}`} key={item.id}>
            <ItemCard src={item.images[0]} name={item.name} price={item.price} key={item.id}/>
          </Link>
        )
      })}
      </div>
    </div>
  )
}

export default Shop