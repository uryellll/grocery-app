import React from 'react'
import classes from './shoppingCart.module.css'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import { connect } from 'react-redux'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'

import {
  removeFromCart,
  adjustQuantity,
} from '../../redux/Shopping/shoppingActions'

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

const ShoppingCart = ({ cart }) => {
  const shoppingCartList = cart.map((cartList) => {
    return {}
  })

  return (
    <>
      <NavigationBar />
      <div className={classes.cartContainer}></div>
    </>
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQuantity: (id) => dispatch(adjustQuantity(id)),
  }
}

export default connect(mapStateToProps)(ShoppingCart)
