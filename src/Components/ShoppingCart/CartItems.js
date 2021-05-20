import classes from './cartItems.module.css'
import React from 'react'
import {
  removeFromCart,
  increaseQuantity,
  reduceQuantity,
} from '../../redux/Shopping/Actions/shoppingActions'
import { useDispatch } from 'react-redux'

const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch()

  function checkQuantity() {
    if (cartItem.quantity === 1) {
      dispatch(removeFromCart(cartItem.id))
    } else {
      dispatch(
        reduceQuantity(cartItem.product_id, cartItem.id, cartItem.quantity - 1),
      )
    }
  }

  function removeItemFromCart(id) {
    dispatch(removeFromCart(id))
  }

  return (
    <div className={classes.container}>
      <div className={classes.cartItemDetails}>
        <p>{cartItem.product_name}</p>
        <p>{cartItem.price.raw}</p>
      </div>
      <div className={classes.adjQuantity}>
        <button
          onClick={() => {
            dispatch(
              increaseQuantity(
                cartItem.product_id,
                cartItem.id,
                cartItem.quantity + 1,
              ),
            )
          }}
        >
          +
        </button>
        <p>{cartItem.quantity}</p>
        <button
          onClick={() => {
            checkQuantity()
          }}
        >
          -
        </button>
      </div>
      <div className={classes.SubTotal}>
        <p>{cartItem.quantity * cartItem.price.raw}</p>
      </div>
      <button
        className={classes.CartRemoveBtn}
        onClick={() => {
          removeItemFromCart(cartItem.id)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItems
