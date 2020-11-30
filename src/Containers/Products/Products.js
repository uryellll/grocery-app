import React, { useState } from 'react'
import GroceryCard, {
  mapDispatchToProps,
} from '../../Components/GroceryCard/GroceryCard'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import classes from './Products.module.css'
import { connect } from 'react-redux' //connecting redux to component
import { Button } from '@material-ui/core'

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

const DISPLAY_ALLITEMS = 'allItems'
const DISPLAY_VEGETABLES = 'vegetables'
const DISPLAY_SNACKS = 'snacks'
const DISPLAY_DRINKS = 'drinks'
const DISPLAY_MEAT_POULTRY = 'meatAndPoultry'

const Products = ({ products }) => {
  const [items, setItems] = useState(DISPLAY_ALLITEMS)

  const filterProducts = (category) => {
    setItems(category)
    console.log(category)
  }

  const vegetableList = products.vegetables.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
        id={product.id}
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
        id={product.id}
      />
    )
  })
  const drinksList = products.drinks.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
        id={product.id}
      />
    )
  })
  const meatPoultryList = products.meatPoultry.map((product) => {
    return (
      <GroceryCard
        key={Math.random()}
        name={product.name}
        price={product.price}
        image={product.image}
        id={product.id}
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
          {items === DISPLAY_ALLITEMS && vegetableList}
          {items === DISPLAY_ALLITEMS && snacksList}
          {items === DISPLAY_ALLITEMS && drinksList}
          {items === DISPLAY_ALLITEMS && meatPoultryList}
          {items === DISPLAY_VEGETABLES && vegetableList}
          {items === DISPLAY_SNACKS && snacksList}
          {items === DISPLAY_DRINKS && drinksList}
          {items === DISPLAY_MEAT_POULTRY && meatPoultryList}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Products)
