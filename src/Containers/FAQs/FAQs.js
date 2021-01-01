import React from 'react'
import classes from './FAQs.module.css'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Footer from '../../Components/Footer/Footer'

function FAQs() {
  return (
    <>
      <NavigationBar />
      <div className={classes.container}>
        <h1>Frequently Asked Questions</h1>
        <details>
          <summary>Question 1</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            dolorum eius ducimus quisquam corporis qui quae velit voluptatibus
            provident veritatis.
          </p>
        </details>
        <details>
          <summary>Question 2</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            officia impedit ipsum, nam iusto ex consectetur, minima magnam ea
            saepe modi fuga autem. Doloribus quaerat totam rerum voluptas
            ducimus at blanditiis culpa molestiae ratione iste. Molestias ad
            aperiam temporibus ex.
          </p>
        </details>
        <details>
          <summary>Question 3</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 4</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
        <details>
          <summary>Question 5</summary>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            quis!
          </p>
        </details>
      </div>
      <Footer />
    </>
  )
}

export default FAQs
