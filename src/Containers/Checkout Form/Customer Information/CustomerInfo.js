import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCustomerInfo } from '../../../redux/Shopping/shoppingActions'
import './CustomerInfo.css'

function CustomerInfo({ nextPage, setNextPage }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setCustomerInfo(firstName, lastName, email))
    setFirstName('')
    setLastName('')
    setEmail('')
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
          value={firstName}
          name="firstName"
          placeholder="Enter your first name"
          onChange={handleFirstNameChange}
          required
        />
        <label className="checkout__label" htmlFor="lastName">
          Last name
        </label>
        <input
          className="checkout__input"
          type="text"
          value={lastName}
          name="lastName"
          placeholder="Enter your last name"
          onChange={handleLastNameChange}
          required
        />
        <label className="checkout__label" htmlFor="email">
          Email
        </label>
        <input
          className="checkout__input"
          type="text"
          value={email}
          name="email"
          placeholder="Enter your email"
          onChange={handleEmailChange}
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
