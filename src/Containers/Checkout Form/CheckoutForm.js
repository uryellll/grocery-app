import React, { useState } from 'react'
import './CheckoutForm.css'
import CustomerInfo from './Customer Information/CustomerInfo'
import PaymentForm from './Payment/PaymentForm'
import ShippingForm from './Shipping Details/ShippingForm'
import ConfirmationPage from './Confirmation/ComfirmationPage'

function CheckoutForm() {
  const [nextPage, setNextPage] = useState(1)

  return (
    <div className="checkout-form-container">
      <div className="form-container">
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
        {nextPage === 1 && (
          <CustomerInfo nextPage={nextPage} setNextPage={setNextPage} />
        )}
        {nextPage === 2 && (
          <ShippingForm nextPage={nextPage} setNextPage={setNextPage} />
        )}
        {nextPage === 3 && (
          <PaymentForm nextPage={nextPage} setNextPage={setNextPage} />
        )}
        {nextPage === 4 && <ConfirmationPage />}
      </div>
    </div>
  )
}

export default CheckoutForm
