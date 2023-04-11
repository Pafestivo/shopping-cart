import React, { useCallback, useEffect, useState } from "react";
import CartItems from "../data/CartItems";
import '../styles/cart.css'

const Cart = () => {

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
    const updatedCartItems = [...cartItems]

    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === item.id)

    if(updatedCartItems[itemIndex].quantity - 1 >= 0 ) {
      updatedCartItems[itemIndex].quantity--
    }

    if(updatedCartItems[itemIndex].quantity === 0) {
      updatedCartItems.splice(itemIndex, 1)
    }

    setCartItems(updatedCartItems)
    calculateTotal()
  }

  const incrementQuantity = (item) => {
    const updatedCartItems = [...cartItems]

    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === item.id)

    updatedCartItems[itemIndex].quantity++
    setCartItems(updatedCartItems)
    calculateTotal()
  }

  const deleteItem = (item) => {
    const updatedCartItems = [...cartItems]

    const itemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === item.id)

    updatedCartItems.splice(itemIndex, 1)
    setCartItems(updatedCartItems)
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
                <p>${item.price * item.quantity}</p>
                <div className="quant-control">
                  <p onClick={() => decrementQuantity(item)} className="quant-btn">-</p>
                  <p>Quantity: {item.quantity}</p>
                  <p onClick={() => incrementQuantity(item)} className="quant-btn">+</p>
                </div>
              </div>
            </div>
          </div>
        )})}
        <div className="order-total">
          <h1>Total: ${total}</h1>
          <p className="checkout">Checkout</p>
        </div>
      
    </div>
  )
}

export default Cart