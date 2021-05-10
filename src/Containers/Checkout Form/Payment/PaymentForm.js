import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPaymentDetails } from '../../../redux/Shopping/shoppingActions'
import './PaymentForm.css'

function Payment({ nextPage, setNextPage }) {
  const [paymentInfo, setPaymentInfo] = useState({
    card_number: '',
    exp_month: '',
    exp_year: '',
    ccv: '',
  })

  const dispatch = useDispatch()

  function handleCardNumberChange(e) {
    setPaymentInfo({ ...paymentInfo, card_number: e.target.value })
  }
  function handleExpMonthChange(e) {
    setPaymentInfo({ ...paymentInfo, exp_month: e.target.value })
  }
  function handleExpYearChange(e) {
    setPaymentInfo({ ...paymentInfo, exp_year: e.target.value })
  }
  function handleccvChange(e) {
    setPaymentInfo({ ...paymentInfo, ccv: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setPaymentDetails(paymentInfo))
    setPaymentInfo({
      ...paymentInfo,
      card_number: '',
      exp_month: '',
      exp_year: '',
      ccv: '',
    })
    setNextPage(nextPage + 1)
  }

  return (
    <div className="payment-information-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="payment-information">
          <h4 className="checkout__subheading">Payment information</h4>

          <label className="checkout__label" htmlFor="cardNum">
            Credit card number
          </label>
          <input
            className="checkout__input"
            type="text"
            name="cardNum"
            value={paymentInfo.card_number}
            onChange={handleCardNumberChange}
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
            onChange={handleExpMonthChange}
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
            onChange={handleExpYearChange}
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
            onChange={handleccvChange}
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
