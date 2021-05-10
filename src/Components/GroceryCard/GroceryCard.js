import React, { useState } from 'react'
import classes from './GroceryCard.module.css'
import { Modal, Button } from '@material-ui/core'
import { addToCart } from '../../redux/Shopping/shoppingActions'
import { useDispatch } from 'react-redux'

const GroceryCard = ({ productData }) => {
  const dispatch = useDispatch()
  const [modalIsOpen, setModalisOpen] = useState(false)

  const handleOpen = () => {
    setModalisOpen(true)
  }
  const handleClose = () => {
    setModalisOpen(false)
  }

  function handleAddToCart(productId, quantity) {
    dispatch(addToCart(productId, quantity))
  }

  return (
    <div className={classes.ItemCard}>
      <Modal className={classes.Modal} open={modalIsOpen} onClose={handleClose}>
        <div className={classes.ModalContent}>
          <div className={classes.ModalImageContainer}>
            <img
              className={classes.ModalImage}
              src={productData.media.source}
              alt={productData.name}
            />
          </div>
          <div className={classes.ModalDescription}>
            <h1>{productData.name}</h1>
            <p>{productData.price.raw}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              veritatis enim molestiae eaque nesciunt at sint debitis eum quis
              eligendi sed hic accusamus aut repellendus deserunt nam labore,
              quisquam omnis?
            </p>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(productData.id, 1)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </Modal>
      <div className={classes.ProductImgContainer} onClick={handleOpen}>
        <img
          src={productData.media.source}
          alt={productData.name}
          className={classes.ProductImage}
        />
      </div>
      <div className={classes.ProductDetails}>
        <div>
          <p>{productData.name}</p>
          <p>P {productData.price.raw}</p>
        </div>
        <button onClick={() => handleAddToCart(productData.id, 1)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default GroceryCard
