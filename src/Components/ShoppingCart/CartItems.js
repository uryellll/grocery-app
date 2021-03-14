import classes from './cartItems.module.css'
import React from 'react'
import {
  removeFromCart,
  adjustQuantity,
  reduceQuantity,
} from '../../redux/Shopping/shoppingActions'
import { connect } from 'react-redux'

const CartItems = ({
  cartItemData,
  adjustQuantity,
  removeFromCart,
  reduceQuantity,
}) => {
  function checkQuantity() {
    if (cartItemData.quantity === 1) {
      removeFromCart(cartItemData.id)
    } else {
      reduceQuantity(cartItemData.id)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.cartItemDetails}>
        <p>{cartItemData.name}</p>
        <p>{cartItemData.price}</p>
      </div>
      <div className={classes.adjQuantity}>
        <button
          onClick={() => {
            adjustQuantity(cartItemData.id)
          }}
        >
          +
        </button>
        <p>{cartItemData.quantity}</p>
        <button
          onClick={() => {
            checkQuantity(cartItemData.id)
          }}
        >
          -
        </button>
      </div>
      <div className={classes.SubTotal}>
        <p>{cartItemData.quantity * cartItemData.price}</p>
      </div>
      <button
        className={classes.CartRemoveBtn}
        onClick={() => {
          removeFromCart(cartItemData.id)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQuantity: (id) => dispatch(adjustQuantity(id)),
    reduceQuantity: (id) => dispatch(reduceQuantity(id)),
  }
}

export default connect(null, mapDispatchToProps)(CartItems)
