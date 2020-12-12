import React from 'react'
import classes from './navigationbar.module.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbarPrimary}>
        <h1 id="logo">
          <Link to="/">logo</Link>
        </h1>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchBar}
            placeholder="What are you looking for?"
          />
          <button type="submit" className={classes.searchBtn}>
            Search
          </button>
          <Link to="/shopping-cart">
            <AddShoppingCartSharpIcon
              className={classes.AddShoppingCartSharpIcon}
            />
          </Link>
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
