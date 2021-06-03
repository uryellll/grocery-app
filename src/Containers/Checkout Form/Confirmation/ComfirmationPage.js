import React from 'react'
import './ConfirmationPage.css'
import { useSelector } from 'react-redux'

function ComfirmationPage() {
  const checkOutInfo = useSelector((state) => state.checkOut)
  const {
    customer: { firstname, lastname },
    shipping: { street, town_city, county_state },
  } = checkOutInfo

  return (
    <div className="confirmation-container">
      <h1>Order Confirmed</h1>
      <div className="customer-info">
        <h2>Customer Name:</h2>
        <p>{`${firstname} ${lastname}`}</p>
        <h2>Shipping Address:</h2>
        <p>{`${street}, ${town_city}`}</p>
      </div>
    </div>
  )
}

export default ComfirmationPage
