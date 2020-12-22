import React, { useState } from 'react'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import classes from './Products.module.css'
import { connect } from 'react-redux' //connecting redux to component
import { Button } from '@material-ui/core'

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

const DISPLAY_ALLITEMS = ''
const DISPLAY_VEGETABLES = 'vegetable'
const DISPLAY_SNACKS = 'snack'
const DISPLAY_DRINKS = 'drink'
const DISPLAY_MEAT_POULTRY = 'meatPoultry'

const Products = ({ products }) => {
  const [category, setCategory] = useState(DISPLAY_ALLITEMS)

  const filterProducts = (category) => {
    setCategory(category)
    console.log(category)
  }

  const filteredProducts = products.filter((product) => {
    return product.type === category
  })

  const filteredList = filteredProducts.map((product) => {
    return <GroceryCard key={Math.random()} productData={product} />
  })

  const unfilteredList = products.map((product) => {
    return <GroceryCard key={Math.random()} productData={product} />
  })

  console.log(filteredList)

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
          Products
        </h2>
        <div className={classes.Top}>
          <div className={classes.Categories}>
            <Button
              variant="outlined"
              onClick={() => {
                filterProducts(DISPLAY_ALLITEMS)
              }}
            >
              All products
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                filterProducts(DISPLAY_VEGETABLES)
              }}
            >
              Vegetables
            </Button>
            <Button
              variant="outlined"
              value="drinks"
              onClick={() => {
                filterProducts(DISPLAY_DRINKS)
              }}
            >
              Drinks
            </Button>
            <Button
              variant="outlined"
              onClick={() => filterProducts(DISPLAY_SNACKS)}
            >
              Snacks
            </Button>
            <Button
              variant="outlined"
              value="meatAndPoultry"
              onClick={() => {
                filterProducts(DISPLAY_MEAT_POULTRY)
              }}
            >
              Meat and Poultry
            </Button>
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
          {category === DISPLAY_ALLITEMS && unfilteredList}
          {category === DISPLAY_VEGETABLES && filteredList}
          {category === DISPLAY_SNACKS && filteredList}
          {category === DISPLAY_DRINKS && filteredList}
          {category === DISPLAY_MEAT_POULTRY && filteredList}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Products)
