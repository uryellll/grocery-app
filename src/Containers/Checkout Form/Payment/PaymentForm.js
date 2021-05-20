import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPaymentDetails } from '../../../redux/Shopping/Actions/shoppingActions'
import './PaymentForm.css'

function Payment({ nextPage, setNextPage }) {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    ccv: '',
  })

  const dispatch = useDispatch()

  function handleFormChange(e) {
    const { name, value } = e.target
    setPaymentInfo({ ...paymentInfo, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setPaymentDetails(paymentInfo))
    setPaymentInfo({
      ...paymentInfo,
      cardNumber: '',
      expMonth: '',
      expYear: '',
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
            name="cardNumber"
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
            name="expMonth"
            value={paymentInfo.exp_month}
            onChange={handleFormChange}
            placeholder="Card expiry month"
          />

          <label className="checkout__label" htmlFor="expYear">
            Expiry year
          </label>
          <input
            className="checkout__input"
            type="text"
            name="expYear"
            value={paymentInfo.exp_year}
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default Payment
