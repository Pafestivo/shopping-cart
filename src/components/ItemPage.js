import React from "react";
import { useParams } from "react-router-dom";
import Items from "../data/items";
import ShopSidebar from "./shop categories/ShopSidebar";
import '../styles/item-page.css'

const ItemPage = ({ setCartLength, cartItems, setCartItems}) => {
  const { id } = useParams()
  const item = Items.find(item => item.id === +id)

  const addToBag = (item) => {
    // make a copy of the item
    const itemCopy = {...item}
    
    if(cartItems.find(cartItem => cartItem.id === itemCopy.id)) {
      const itemIndex = cartItems.findIndex(cartItem => cartItem.id === itemCopy.id)
      cartItems[itemIndex].quantity++
    } else {
      cartItems.push(itemCopy)
      setCartLength(cartItems.length)
    }

    document.querySelector('.item-added').classList.remove('hidden')
  }

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
          <p onClick={() => addToBag(item)} className="btn bag">
            Add To Cart
            <p className="item-added hidden">Item added to cart.</p>
            </p>
          
          <p onClick={() => alert("You can't buy from a fake store.")} className="btn buy-now">Buy Now</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemPage