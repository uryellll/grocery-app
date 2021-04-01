import React from 'react'
import classes from './Login.module.css'

function Login() {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.svg}></div>
        <form action="">
          <h1>Welcome</h1>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
          />
          <label htmlFor="username">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login
