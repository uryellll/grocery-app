import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>ERROR 404</h1>
      <Link to="/" exact>
        Go back to home
      </Link>
    </div>
  )
}

export default Error404
