import React from 'react'
import classes from './shoppingCart.module.css'
import { connect } from 'react-redux'
import CartItems from '../../Components/ShoppingCart/CartItems'

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

const ShoppingCart = ({ cart }) => {
  function shoppingCartList() {
    if (Object.keys(cart).length !== 0) {
      const cartItems = cart.map((cartItem) => {
        return <CartItems key={Math.random()} cartItemData={cartItem} />
      })
      return cartItems
    } else {
      return <b>No items in cart yet.</b>
    }
  }

  const total = cart.reduce((currentTotal, item) => {
    return item.price * item.quantity + currentTotal
  }, 0)

  const totalQuantity = cart.reduce((currentTotal, item) => {
    return item.quantity + currentTotal
  }, 0)

  const productList = cart.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
      </div>
    )
  })

  return (
    <div className={classes.shoppingCartWrapper}>
      <h1>Shopping Cart</h1>
      <div className={classes.CartContainer}>
        <div className={classes.CartItems}>
          <div className={classes.CartTitleContainer}>
            <div className={classes.CartProductName}>
              <h3>Product Name</h3>
              <h3>Price</h3>
            </div>
            <div className={classes.CartProductQuantity}>
              <h3>Quantity</h3>
            </div>
            <div className={classes.CartProductQuantity}>
              <h3>Sub-Total</h3>
            </div>
            <div className={classes.CartRemove}>
              <h3>Remove</h3>
            </div>
          </div>
          {shoppingCartList()}
        </div>
        <div className={classes.cartSummaryContainer}>
          <details>
            <summary>
              <h2>Cart Summary</h2>
            </summary>
            <div className={classes.cartSummary}>
              <div className={classes.productList}>
                <p>Product List:</p>
                <p>{productList}</p>
              </div>
              <div>
                <p>Total Items:</p>
                <p> {totalQuantity}</p>
              </div>
              <div>
                <p>Total Amount:</p>
                <p> {total}</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ShoppingCart)
