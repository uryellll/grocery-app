import React, { useEffect, useState } from 'react'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import classes from './Products.module.css'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

const Products = ({ products }) => {
  const vegetableList = products.vegetables.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
      />
    )
  })

  const snacksList = products.snacks.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
      />
    )
  })

  return (
    <div>
      <NavigationBar />
      <div className={classes.Wrapper}>
        <h2
          style={{
            fontSize: '50px',
            fontWeight: '400',
            marginBottom: '2rem',
          }}
        >
          Vegetables
        </h2>
        <div className={classes.Top}>
          <div className={classes.Categories}>
            <div>Category 1</div>
            <div>Category 2</div>
            <div>Category 3</div>
            <div>Category 4</div>
            <div>Category 5</div>
          </div>
          <div className={classes.Input}>
            Search:{' '}
            <input
              style={{
                marginLeft: '1rem',
                height: '25px',
                border: '1px solid black',
              }}
              type="text"
            ></input>
          </div>
        </div>
        <div className={classes.Cards}>
          {vegetableList}, {snacksList}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          {' '}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Products)
