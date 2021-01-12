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
  return (
    <div className={classes.container}>
      <div className={classes.cartItemImage}>
        <img src={cartItemData.image} alt={cartItemData.name} />
      </div>
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
            reduceQuantity(cartItemData.id)
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
