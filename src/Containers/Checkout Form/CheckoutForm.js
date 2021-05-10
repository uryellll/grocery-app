import React, { useState } from 'react'
import './CheckoutForm.css'
import { useSelector } from 'react-redux'
import CustomerInfo from './Customer Information/CustomerInfo'
import PaymentForm from './Payment/PaymentForm'
import ShippingForm from './Shipping Details/ShippingForm'

function CheckoutForm() {
  const shippingDetails = useSelector((state) => state.shop.shippingDetails)
  const [nextPage, setNextPage] = useState(1)

  return (
    <div className="checkout-form-container">
      {nextPage === 1 && (
        <CustomerInfo nextPage={nextPage} setNextPage={setNextPage} />
      )}
      {nextPage === 2 && (
        <PaymentForm nextPage={nextPage} setNextPage={setNextPage} />
      )}
      {nextPage === 3 && (
        <ShippingForm nextPage={nextPage} setNextPage={setNextPage} />
      )}
      <div className="progress-bar">
        <div
          className={`progress-circle ${nextPage >= 1 ? 'active' : null}`}
        ></div>
        <div
          className={`progress-circle ${nextPage >= 2 ? 'active' : null}`}
        ></div>
        <div
          className={`progress-circle ${nextPage >= 3 ? 'active' : null}`}
        ></div>
        <div
          className={`progress-circle ${nextPage === 4 ? 'active' : null}`}
        ></div>
      </div>
    </div>
  )
}

export default CheckoutForm
