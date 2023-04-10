import React from "react";
import '../styles/item-card.css';

const ItemCard = ({ src, name, price }) => {

  return(
    <div className="item-card">
      <div className="item-image">
        <img src={src} alt={name} />
      </div>
      <h1 className="item-name">{name}</h1>
      <p className="item-price">${price}</p>
    </div>
  )
}

export default ItemCard