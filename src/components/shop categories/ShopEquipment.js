import React from "react";
import ShopSidebar from "./ShopSidebar";
import Items from "../../data/items";
import ItemCard from "../itemCard";
import { Link } from "react-router-dom";

const ShopEquipment = () => {
  const properItems = Items.filter(item => item.category === 'equipment')

  return (
    <div className="shop">
      <ShopSidebar category={'Equipment'} />

      <div className="display">
        {properItems.map(item => {
          return(
            <Link to={`/shop/${item.id}`} key={item.id}>
              <ItemCard src={item.images[0]} name={item.name} price={item.price} key={item.id}/>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ShopEquipment