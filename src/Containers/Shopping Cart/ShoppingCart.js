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

  return (
    <>
      <NavigationBar />
      <h1>Shopping Cart</h1>
      <div className={classes.cartContainer}>{shoppingCartList}</div>
    </>
  )
}

export default connect(mapStateToProps)(ShoppingCart)
