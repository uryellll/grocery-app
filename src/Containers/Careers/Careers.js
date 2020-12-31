import React from 'react'
import classes from './Careers.module.css'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Footer from '../../Components/Footer/Footer'

function Careers() {
  return (
    <>
      <NavigationBar />
      <div className={classes.Container}>
        <div className={classes.banner}>
          <h1>Join Our Team</h1>
        </div>
        <div className={classes.Contents}>
          <h2>Why join us?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
            enim assumenda aut, in tempore porro, aliquam ea doloribus possimus
            sequi vero dolorum quibusdam nemo, officiis sapiente mollitia rerum
            nobis voluptatem cupiditate repellat rem? Voluptatibus itaque soluta
            enim possimus, eveniet magni dolor praesentium officiis et, quia
            dolorem consectetur necessitatibus esse!
          </p>
        </div>
        <h2>Available Positions</h2>
        <div className={classes.CareersContainer}>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
          <div className={classes.Careers}>
            <h4>Job Title</h4>
            <h5>Job Description:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              rerum dolor qui velit vero quam explicabo. Corrupti atque illum
              tempora!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers
