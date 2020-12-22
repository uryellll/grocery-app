import classes from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

const landing = ({ products }) => {
  return (
    <>
      <div className={classes.banner}>
        <svg
          className={classes.bannerSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff9642"
            fill-opacity="1"
            d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,218.7C672,256,768,256,864,234.7C960,213,1056,171,1152,133.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className={classes.topBar}>
          <h1>
            <Link to="/">LOGO</Link>
          </h1>

          <div>
            <input type="text" placeholder="What do you need?" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className={classes.slogan}>
          <h1>
            The groceries you need, <br />
            delivered at your doorstep.
          </h1>
          <Link to="/products">
            <Button variant="contained" className={classes.bannerBtn}>
              Shop now
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.popularItems}>
          <h2>Popular Products</h2>
          <div className={classes.itemGrid}>
            {products.map((products) => (
              <GroceryCard key={Math.random()} productData={products} />
            ))}
          </div>
        </div>
        <div className={classes.discountedItems}>
          <h2>Discounted Products</h2>
          <div className={classes.itemGrid}>
            {products.map((products) => (
              <GroceryCard key={Math.random()} productData={products} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(landing)
