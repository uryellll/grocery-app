import React from 'react'
import classes from './navigationbar.module.css'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarPrimary}>
        <h1 id="logo">
          <Link to="/">logo</Link>
        </h1>
        <div className={classes.search}>
          <Link to="/shopping-cart">
            <BiShoppingBag className={classes.ShoppingCartSharpIcon} />
          </Link>
          <input
            type="text"
            className={classes.searchBar}
            placeholder="What are you looking for?"
          />
          <button type="submit" className={classes.searchBtn}>
            Search
          </button>
        </div>
      </div>
      <div className={classes.navbarSecondary}>
        <ul className={classes.navbarLinks}>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/products">
            <li>by Category</li>
          </Link>
          <Link to="/products">
            <li>Popular</li>
          </Link>
          <Link to="/products">
            <li>Sale</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
