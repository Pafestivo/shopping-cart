import React from "react";
import ShopSidebar from "./ShopSidebar";
import Items from "../../data/items";
import ItemCard from "../itemCard";

const ShopFood = () => {
  const properItems = Items.filter(item => item.category === 'food')

  return (
    <div className="shop">
      <ShopSidebar category={'Food'} />

      <div className="display">
      {properItems.map(item => {
        return <ItemCard src={item.images[0]} name={item.name} price={item.price} key={item.id}/>
      })}
      </div>
    </div>
  )
}

export default ShopFood