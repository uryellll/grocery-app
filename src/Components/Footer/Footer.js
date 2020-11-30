import React from 'react'
import classes from './footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerLinks}>
        <div className={classes.company}>
          <h3>Company</h3>
          <ul>
            <li className={classes.link}>
              <Link to="/about-us" className={classes.link}>
                About Us
              </Link>
            </li>
            <li className={classes.link}>
              <Link to="/careers" className={classes.link}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.customerCare}>
          <h3>Customer Care</h3>
          <ul>
            <li className={classes.link}>
              <Link to="/faqs" className={classes.link}>
                FAQs
              </Link>
            </li>
            <li className={classes.link}>
              <Link to="/terms-and-conditions" className={classes.link}>
                Terms and Conditions
              </Link>
            </li>
            <li className={classes.link}>
              <Link to="/delivery-areas" className={classes.link}>
                Delivery Areas
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.follow}>
          <h3>Follow Us</h3>
          <ul>
            <li className={classes.link}>
              <Link to="/" className={classes.link}>
                Facebook
              </Link>
            </li>
            <li className={classes.link}>
              <Link to="/" className={classes.link}>
                Twitter
              </Link>
            </li>
            <li className={classes.link}>
              <Link to="/" className={classes.link}>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>All rights reserved. 2020</p>
    </footer>
  )
}

export default Footer
