import React, { useState } from "react";
import '../styles/item-card.css';

const ItemCard = ({ src, name, price }) => {

  const [loading, setLoading] = useState(true)

  const confirmLoading = () => {
    setLoading(false)
  }

  return(
    <div className="item-card">
      <div className="item-image">
        {loading ? (
          <div className="loading-shop">
            <i class="fa-solid fa-paw fa-bounce"></i>
            <p>Loading...</p>
          </div>
        ) : (
          null
        )}
        <img src={src} alt={name} onLoad={confirmLoading}/>
      </div>
      <h1 className="item-name">{name}</h1>
      <p className="item-price">${price}</p>
    </div>
  )
}

export default ItemCard