import React from 'react'
import classes from './GroceryCard.module.css'

import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shoppingActions'

const GroceryCard = (props) => {
  return (
    <div className={classes.ItemCard} onClick={props.click}>
      <div className={classes.ProductImg}>
        <img
          src={props.image}
          alt={props.name}
          className={classes.ProductImage}
        />
      </div>
      <div className={classes.ProductDetails}>
        <div>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <button onClick={() => addToCart(props.id)}>Add to cart</button>
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
