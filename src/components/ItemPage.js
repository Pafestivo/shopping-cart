import React from "react";
import { useParams } from "react-router-dom";
import Items from "../data/items";
import ShopSidebar from "./shop categories/ShopSidebar";
import '../styles/item-page.css'

const ItemPage = () => {
  const { id } = useParams()
  const item = Items.find(item => item.id === +id)
  return(
    <div className='shop'>
      <ShopSidebar category={item.category}/>
      <div className="item-details">
        <h1>{item.name}</h1>
        <div className="img-container">
          <img src={item.images[0]} alt={item.name} />
        </div>
        <div className="item-info">
          <div className="price-desc">
            <p>${item.price}</p>
            <p>{item.description}</p>
          </div>
          <div className="actions">
          <p className="btn bag">Add To Bag</p>
          <p className="btn buy-now">Buy Now</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemPage