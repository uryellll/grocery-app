import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCustomerInfo } from '../../../redux/Shopping/Actions/checkOutActions'
import './CustomerInfo.css'

function CustomerInfo({ nextPage, setNextPage }) {
  const [customerInformation, setCustomerInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const dispatch = useDispatch()

  function handleFormChange(e) {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      setCustomerInfo(
        customerInformation.firstName,
        customerInformation.lastName,
        customerInformation.email,
      ),
    )
    setCustomerInformation({
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
          value={customerInformation.firstName}
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
          value={customerInformation.lastName}
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
          value={customerInformation.email}
          name="email"
          placeholder="Enter your email"
          onChange={handleFormChange}
          required
        />{' '}
        <button type="submit" className="checkout__btn-confirm">
          Next
        </button>
      </form>
    </div>
  )
}

export default CustomerInfo
