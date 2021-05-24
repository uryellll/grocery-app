import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPaymentDetails } from '../../../redux/Shopping/Actions/checkOutActions'
import './PaymentForm.css'

function Payment({ nextPage, setNextPage }) {
  const dispatch = useDispatch()
  const [paymentInfo, setPaymentInfo] = useState({
    cardnumber: '',
    expiry_month: '',
    expiry_year: '',
    ccv: '',
  })

  function handleFormChange(e) {
    const { name, value } = e.target
    setPaymentInfo({ ...paymentInfo, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setPaymentDetails(paymentInfo))
    setPaymentInfo({
      ...paymentInfo,
      cardnumber: '',
      expiry_month: '',
      expiry_year: '',
      ccv: '',
    })
    setNextPage(nextPage + 1)
  }

  return (
    <div className="payment-information-container">
      <form onSubmit={handleSubmit}>
        <div className="payment-information">
          <h4 className="checkout__subheading">Payment information</h4>

          <label className="checkout__label" htmlFor="cardNum">
            Credit card number
          </label>
          <input
            className="checkout__input"
            type="text"
            name="cardnumber"
            value={paymentInfo.card_number}
            onChange={handleFormChange}
            placeholder="Enter your card number"
          />

          <label className="checkout__label" htmlFor="expMonth">
            Expiry month
          </label>
          <input
            className="checkout__input"
            type="text"
            name="expiry_month"
            value={paymentInfo.expiry_month}
            onChange={handleFormChange}
            placeholder="Card expiry month"
          />

          <label className="checkout__label" htmlFor="expYear">
            Expiry year
          </label>
          <input
            className="checkout__input"
            type="text"
            name="expiry_year"
            value={paymentInfo.expiry_year}
            onChange={handleFormChange}
            placeholder="Card expiry year"
          />

          <label className="checkout__label" htmlFor="ccv">
            CCV
          </label>
          <input
            className="checkout__input"
            type="text"
            name="ccv"
            value={paymentInfo.ccv}
            onChange={handleFormChange}
            placeholder="CCV (3 digits)"
          />
        </div>
        <button type="submit" className="checkout__btn-confirm">
          Next
        </button>
      </form>
    </div>
  )
}

export default Payment
