import React, { useState } from 'react'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import classes from './Products.module.css'
import { connect } from 'react-redux' //connecting redux to component

import chips from '../../Assets/card/chips.jpg'
import drinks from '../../Assets/card/drinks.jpg'
import vegetables from '../../Assets/card/vegetables.jpg'

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
      <section className={classes.productCategoriesCard}>
        <div className={classes.sectionTitle}>
          <h1>Our Products</h1>
        </div>
        <div className={classes.categoryCard}>
          <div className={classes.itemDescription}>
            <h1>Snacks</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure
            magni nemo! Dicta quod rerum quo voluptatum nam animi mollitia enim
            itaque reiciendis.
          </div>
          <div className={classes.productImg}>
            <div className={classes.imgCover}></div>
            <div className={classes.btn}>
              <button className={classes.imgBtn}>Shop Snacks</button>
            </div>
            <img src={chips} alt="chips img" />
          </div>
        </div>
        <div className={classes.categoryCard}>
          <div className={classes.itemDescription}>
            <h1>Vegetables</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure
            magni nemo! Dicta quod rerum quo voluptatum nam animi mollitia enim
            itaque reiciendis.
          </div>
          <div className={classes.productImg}>
            <div className={classes.imgCover}></div>
            <div className={classes.btn}>
              <button className={classes.imgBtn}>Shop Snacks</button>
            </div>
            <img src={vegetables} alt="chips img" />
          </div>
        </div>
        <div className={classes.categoryCard}>
          <div className={classes.itemDescription}>
            <h1>Drinks</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure
            magni nemo! Dicta quod rerum quo voluptatum nam animi mollitia enim
            itaque reiciendis.
          </div>
          <div className={classes.productImg}>
            <div className={classes.imgCover}></div>
            <div className={classes.btn}>
              <button className={classes.imgBtn}>Shop Snacks</button>
            </div>
            <img src={drinks} alt="chips img" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default connect(mapStateToProps)(Products)
