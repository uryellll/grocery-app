import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../../../redux/Shopping/shoppingActions'
import './ShippingForm.css'

function Shipping({ nextPage, setNextPage }) {
  const dispatch = useDispatch()
  const [shippingInfo, setShippingInfo] = useState({
    shippingName: '',
    shippingStreet: '',
    shippingCity: '',
    shippingPostalZipCode: '',
  })

  function handleShippingNameChange(e) {
    setShippingInfo({ ...shippingInfo, shippingName: e.target.value })
  }

  function handleShippingStreetChange(e) {
    setShippingInfo({ ...shippingInfo, shippingStreet: e.target.value })
  }

  function handleShippingCityChange(e) {
    setShippingInfo({ ...shippingInfo, shippingCity: e.target.value })
  }

  function handleShippingPostalZipCodeChange(e) {
    setShippingInfo({ ...shippingInfo, shippingPostalZipCode: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(emptyCart())
    setShippingInfo({
      ...shippingInfo,
      shippingName: '',
      shippingStreet: '',
      shippingCity: '',
      shippingPostalZipCode: '',
    })
    setNextPage(nextPage + 1)
  }

  return (
    <div className="shipping-information-container">
      <form onSubmit={handleSubmit}>
        <h4 className="checkout__subheading">Shipping details</h4>
        <label className="checkout__label" htmlFor="shippingName">
          Full name
        </label>
        <input
          className="checkout__input"
          type="text"
          value={shippingInfo.shippingName}
          onChange={handleShippingNameChange}
          name="shippingName"
          placeholder="Enter your shipping full name"
          required
        />
        <label className="checkout__label" htmlFor="shippingStreet">
          Street address
        </label>
        <input
          className="checkout__input"
          type="text"
          value={shippingInfo.shippingStreet}
          onChange={handleShippingStreetChange}
          name="shippingStreet"
          placeholder="Enter your street address"
          required
        />
        <label className="checkout__label" htmlFor="shippingCity">
          City
        </label>
        <input
          className="checkout__input"
          type="text"
          value={shippingInfo.shippingCity}
          onChange={handleShippingCityChange}
          name="shippingCity"
          placeholder="Enter your city"
          required
        />
        <label className="checkout__label" htmlFor="shippingPostalZipCode">
          Postal/Zip code
        </label>
        <input
          className="checkout__input"
          type="text"
          value={shippingInfo.shippingPostalZipCode}
          onChange={handleShippingPostalZipCodeChange}
          name="shippingPostalZipCode"
          placeholder="Enter your postal/zip code"
          required
        />
        <button type="submit" className="checkout__btn-confirm">
          Confirm Order
        </button>
      </form>
    </div>
  )
}

export default Shipping
