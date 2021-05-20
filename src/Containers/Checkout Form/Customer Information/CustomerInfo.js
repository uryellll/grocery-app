import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCustomerInfo } from '../../../redux/Shopping/Actions/checkOutActions'
import './CustomerInfo.css'

function CustomerInfo({ nextPage, setNextPage }) {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const dispatch = useDispatch()

  function handleFormChange(e) {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      setCustomerInfo(
        customerInfo.firstName,
        customerInfo.lastName,
        customerInfo.email,
      ),
    )
    setCustomerInfo({
      firstName: '',
      lastName: '',
      email: '',
    })
    setNextPage(nextPage + 1)
  }

  return (
    <div className="customer-information-container">
      <form action="" onSubmit={handleSubmit}>
        <h4 className="checkout__subheading">Customer information</h4>
        <label className="checkout__label" htmlFor="firstName">
          First name
        </label>
        <input
          className="checkout__input"
          type="text"
          value={customerInfo.firstName}
          name="firstName"
          placeholder="Enter your first name"
          onChange={handleFormChange}
          required
        />
        <label className="checkout__label" htmlFor="lastName">
          Last name
        </label>
        <input
          className="checkout__input"
          type="text"
          value={customerInfo.lastName}
          name="lastName"
          placeholder="Enter your last name"
          onChange={handleFormChange}
          required
        />
        <label className="checkout__label" htmlFor="email">
          Email
        </label>
        <input
          className="checkout__input"
          type="text"
          value={customerInfo.email}
          name="email"
          placeholder="Enter your email"
          onChange={handleFormChange}
          required
        />{' '}
        <button type="submit" className="checkout__btn-confirm">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CustomerInfo
