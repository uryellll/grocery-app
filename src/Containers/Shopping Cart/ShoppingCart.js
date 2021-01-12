import React from 'react'
import classes from './shoppingCart.module.css'
import { connect } from 'react-redux'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import CartItems from '../../Components/ShoppingCart/CartItems'

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

const ShoppingCart = ({ cart }) => {
  const shoppingCartList = cart.map((cartList) => {
    return <CartItems key={Math.random()} cartItemData={cartList} />
  })

  const total = cart.reduce((currentTotal, item) => {
    return item.price * item.quantity + currentTotal
  }, 0)

  const totalQuantity = cart.reduce((currentTotal, item) => {
    return item.quantity + currentTotal
  }, 0)

  const productList = cart.map((item) => {
    return <p>{item.name}</p>
  })

  return (
    <>
      <NavigationBar />
      <h1>Shopping Cart</h1>
      <div className={classes.CartContainer}>
        <div className={classes.CartInfo}>
          <h3>Cart Summary</h3>
          <p>Product List:</p>
          <p>{productList}</p>
          <div className={classes.CartInfoo}>
            <p>Total Items:</p>
            <p> {totalQuantity}</p>
          </div>
          <div className={classes.CartInfoo}>
            <p>Total Amount:</p>
            <p> {total}</p>
          </div>
        </div>
        <div className={classes.CartItems}>
          <div className={classes.CartTitleContainer}>
            <div className={classes.CartImageTitle}>
              <h3>Image</h3>
            </div>
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
          {shoppingCartList}
        </div>
      </div>
    </>
  )
}

export default connect(mapStateToProps)(ShoppingCart)
