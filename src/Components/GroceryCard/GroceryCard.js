import React from 'react'
import classes from './GroceryCard.module.css'

import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shoppingActions'

const GroceryCard = ({ productData, addToCart }) => {
  return (
    <div className={classes.ItemCard}>
      <div className={classes.ProductImg}>
        <img
          src={productData.image}
          alt={productData.name}
          className={classes.ProductImage}
        />
      </div>
      <div className={classes.ProductDetails}>
        <div>
          <p>{productData.name}</p>
          <p>{productData.price}</p>
        </div>
        <button
          onClick={() => {
            addToCart(productData.id)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(null, mapDispatchToProps)(GroceryCard)
