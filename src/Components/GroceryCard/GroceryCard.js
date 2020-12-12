import React, { useState } from 'react'
import classes from './GroceryCard.module.css'
import { Modal, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shoppingActions'

const GroceryCard = ({ productData, addToCart }) => {
  const [modalIsOpen, setModalisOpen] = useState(false)

  const handleOpen = () => {
    setModalisOpen(true)
  }

  const handleClose = () => {
    setModalisOpen(false)
  }

  return (
    <div className={classes.ItemCard}>
      <Modal className={classes.Modal} open={modalIsOpen} onClose={handleClose}>
        <div className={classes.ModalContent}>
          <div className={classes.ModalImageContainer}>
            <img
              className={classes.ModalImage}
              src={productData.image}
              alt={productData.name}
            />
          </div>
          <div className={classes.ModalDescription}>
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              veritatis enim molestiae eaque nesciunt at sint debitis eum quis
              eligendi sed hic accusamus aut repellendus deserunt nam labore,
              quisquam omnis?
            </p>
            <Button
              variant="contained"
              onClick={() => {
                addToCart(productData.id)
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </Modal>
      <div className={classes.ProductImgContainer} onClick={handleOpen}>
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
