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

  const filterProducts = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
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
    <div className={classes.wrapper}>
      <div className={classes.productsSection}>
        <h1>Products</h1>
        <section className={classes.productCategoriesCard}>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard1}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop vegetables</button>
              </div>
            </div>
          </div>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard2}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop drinks</button>
              </div>
            </div>
          </div>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard3}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop snacks</button>
              </div>
            </div>
          </div>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard3}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop snacks</button>
              </div>
            </div>
          </div>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard1}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop vegetables</button>
              </div>
            </div>
          </div>
          <div className={classes.categoryCard}>
            <div className={classes.imgCard1}>
              <div className={classes.imgCardCover}></div>
              <div className={classes.imgCardText}>
                <button>Shop vegetables</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Products)
