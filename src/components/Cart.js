import React from "react";
import CartItems from "../data/CartItems";
import '../styles/cart.css'

const Cart = () => {
  return(
    <div className="cart">
      {CartItems.map(item => {
        return(
          <div className="cart-item">
            <div className="cart-img-container">
              <img src={item.images[0]} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h1>{item.name}</h1>
              <div className="quant-price">
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          </div>
        )})}
        <div className="order-total">
          <h1>Total: 123142</h1>
          <p className="checkout">Checkout</p>
        </div>
      
    </div>
  )
}

export default Cart