import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../data/CartItems";
import '../styles/cart.css'

const Cart = ({ setCartLength }) => {

  const [cartItems, setCartItems] = useState(CartItems)
  const [total, setTotal] = useState(0)

  const calculateTotal = useCallback(() => {
    const cartPrices = []
    cartItems.forEach(item => {
      cartPrices.push(item.price * item.quantity)
    })
    const totalPrice = cartPrices.reduce((sum, n) => sum + n, 0).toFixed(2)
    setTotal(totalPrice)
  }, [cartItems])

  useEffect(() => {
    calculateTotal()
  }, [cartItems, calculateTotal])

  const decrementQuantity = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)

    if(cartItems[itemIndex].quantity - 1 >= 0 ) {
      cartItems[itemIndex].quantity--
    }

    if(cartItems[itemIndex].quantity === 0) {
      cartItems.splice(itemIndex, 1)
    }

    setCartItems(cartItems)
    calculateTotal()
  }

  const incrementQuantity = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)

    cartItems[itemIndex].quantity++
    setCartItems(cartItems)
    calculateTotal()
  }

  const deleteItem = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)

    cartItems.splice(itemIndex, 1)
    setCartItems(cartItems)
    setCartLength(cartItems.length)
    calculateTotal()
  }


  return(
    <div className="cart">
      {cartItems.map(item => {
        return(
          <div className="cart-item" key={item.id}>
            <p onClick={() => deleteItem(item)}><i className="fa-solid fa-trash"></i></p>

            <div className="cart-img-container">
              <img src={item.images[0]} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h1>{item.name}</h1>
              <div className="quant-price">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quant-control">
                  <p onClick={() => decrementQuantity(item)} className="quant-btn">-</p>
                  <p><span className="mobile-hidden">Quantity:</span> {item.quantity}</p>
                  <p onClick={() => incrementQuantity(item)} className="quant-btn">+</p>
                </div>
              </div>
            </div>
          </div>
        )})}
        <div className="order-total">
          <h1>Total: ${total}</h1>
          <Link to="/">
          <p onClick={() => alert("You can't buy from a fake store.")} className="checkout">Checkout</p>
          </Link>
        </div>
      
    </div>
  )
}

export default Cart