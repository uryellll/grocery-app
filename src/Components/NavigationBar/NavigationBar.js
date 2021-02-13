import React, { useState } from 'react'
import classes from './navigationbar.module.css'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className={classes.navbarWrapper}>
      <h2>Lorem, ipsum.</h2>
      <div className={classes.linksWrapper}>
        <div className={classes.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Log in</Link>
        </div>
        <Link to="/shopping-cart">
          <BiShoppingBag size="2rem" color="#fff" />
        </Link>
        <div
          className={classes.burgerMenuWrapper}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`${
              openMenu ? classes.burgerMenuOpen : classes.burgerMenu
            }`}
          ></div>
        </div>
        <div
          className={`${
            openMenu ? classes.openBurgerMenu : classes.hideBurgerMenu
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about-us">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
