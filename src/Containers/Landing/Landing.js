import classes from './Landing.module.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  changeCategory,
  filterProducts,
  fetchProducts,
} from '../../redux/Shopping/shoppingActions'

import delivery1 from '../../Assets/card/delivery1.svg'
import delivery2 from '../../Assets/card/delivery2.svg'
import delivery3 from '../../Assets/card/delivery3.svg'
import vegetables from '../../Assets/vegetables/vegetables.jpg'
import fruits from '../../Assets/fruits/fruits.jpg'
import spices from '../../Assets/spices/spices.jpg'
import grains from '../../Assets/grains/grains.jpeg'

const Landing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <div className={classes.wrapper}>
      <section className={classes.banner}>
        <div className={classes.cover}></div>
        <div className={classes.greeting}>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos amet at totam recusandae sit illum ullam nemo nostrum
            exercitationem.
          </p>
          <Link to="/products">
            <button>Shop now</button>
          </Link>
        </div>
      </section>
      <section className={classes.products}>
        <h1>Our products</h1>
        <div className={classes.productsWrapper}>
          <div className={classes.productCard}>
            <Link to="/products" className={classes.productBtn}>
              Shop fruits
            </Link>
            <div className={classes.productCover}></div>
            <img src={fruits} alt="Images of fruits" />
          </div>
          <div className={classes.productCard}>
            <Link to="/products" className={classes.productBtn}>
              Shop spices
            </Link>
            <div className={classes.productCover}></div>
            <img src={spices} alt="Images of spices" />
          </div>
          <div className={classes.productCard}>
            <Link to="/products" className={classes.productBtn}>
              Shop Vegetables
            </Link>
            <div className={classes.productCover}></div>
            <img src={vegetables} alt="Images of vegetables" />
          </div>
          <div className={classes.productCard}>
            <Link to="/products" className={classes.productBtn}>
              Shop grains
            </Link>
            <div className={classes.productCover}></div>
            <img src={grains} alt="Images of grains" />
          </div>
        </div>
      </section>
      <section className={classes.cardSection}>
        <h1>Why shop at us?</h1>
        <div className={classes.cardSectionWrapper}>
          <div className={classes.card}>
            <div className={classes.cardDescription}>
              <h2>Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nam voluptates, molestias maiores obcaecati sint
                perspiciatis officiis impedit aperiam mollitia!
              </p>
            </div>
            <div className={classes.img}>
              <img src={delivery1} alt="" />
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardDescription}>
              <h2>Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nam voluptates, molestias maiores obcaecati sint
                perspiciatis officiis impedit aperiam mollitia!
              </p>
            </div>
            <div className={classes.img}>
              <img src={delivery2} alt="" />
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardDescription}>
              <h2>Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nam voluptates, molestias maiores obcaecati sint
                perspiciatis officiis impedit aperiam mollitia!
              </p>
            </div>
            <div className={classes.img}>
              <img src={delivery3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
