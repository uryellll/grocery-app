import React, { useEffect } from 'react'
import classes from './shoppingCart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from '../../Components/ShoppingCart/CartItems'
import {
  emptyCart,
  retrieveCart,
  getCheckoutToken,
} from '../../redux/Shopping/Actions/shoppingActions'
import {
  setCartCheckOutItems,
  setSubdivisions,
} from '../../redux/Shopping/Actions/checkOutActions'

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.shop.cart)

  useEffect(() => {
    dispatch(retrieveCart())
  }, [])

  function checkOutHandler() {
    dispatch(setCartCheckOutItems())
    dispatch(getCheckoutToken())
    dispatch(setSubdivisions())
  }

  if (Object.keys(cart).length === 0) {
    return (
      <div className={classes.shoppingCartWrapper}>
        <h1>Please add items to your cart.</h1>{' '}
      </div>
    )
  }

  if (Object.keys(cart).length !== 0) {
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
            {cart.map((cartItem) => {
              return <CartItems key={cartItem.id} cartItem={cartItem} />
            })}
          </div>
          <div className={classes.checkout}>
            <button
              className={classes.emptyCartBtn}
              onClick={() => dispatch(emptyCart())}
            >
              Empty Cart
            </button>
            <Link to="/checkout">
              <button
                className={classes.checkouttBtn}
                onClick={checkOutHandler}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
