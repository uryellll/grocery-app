import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import './ConfirmationPage.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ComfirmationPage() {
  const checkOutInfo = useSelector((state) => state.checkOut)
  const {
    customer: { firstname, lastname },
    shipping: { street, town_city, county_state },
  } = checkOutInfo

  return (
    <div className="confirmation-container">
      <div className="confirmation-logo">
        <AiOutlineCheckCircle />
      </div>
      <h1>Thank you for your purchase</h1>
      <div className="customer-info">
        <h2>Customer Name:</h2>
        <p>{`${firstname} ${lastname}`}</p>
        <h2>Shipping Address:</h2>
        <p>{`${street}, ${town_city}`}</p>
      </div>
      <Link to="/">
        <button type="button">Back to home</button>
      </Link>
    </div>
  )
}

export default ComfirmationPage
