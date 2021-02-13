import classes from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

const landing = ({ products }) => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.banner}>
        <div className={classes.svgContainer}>
          <svg viewBox="0 0 1440 320">
            <path
              fill="#75cfb8"
              fill-opacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,133.3C672,149,768,203,864,208C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className={classes.greeting}>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            aliquid?
          </p>
          <Link to="/products">
            <button>Shop now</button>
          </Link>
        </div>
      </section>
      <section className={classes.productCategoriesCard}>
        <div className={classes.categoryCard}>
          <h1>Variety of items</h1>
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
      </section>
      <section className={classes.popularProducts}>
        <h1>Popular Products</h1>
        <div className={classes.popularProductsInnerContainer}>
          {products.map((item) => {
            return <GroceryCard productData={item} />
          })}
        </div>
      </section>
    </div>
  )
}

export default connect(mapStateToProps)(landing)
