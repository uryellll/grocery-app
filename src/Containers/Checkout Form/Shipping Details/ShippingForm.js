import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setBillingDetails,
  setFulfillmentData,
  setShippingDetails,
  fetchShippingOptions,
} from '../../../redux/Shopping/Actions/checkOutActions'

import './ShippingForm.css'

function Shipping({ nextPage, setNextPage }) {
  const dispatch = useDispatch()
  const {
    shipping_helpers: { shipping_subdivisions, shipping_options },
    fulfillment: { shipping_method },
  } = useSelector((state) => state.checkOut)
  const [shippingInfo, setShippingInfo] = useState({
    shippingName: '',
    shippingStreet: '',
    shippingCity: '',
    shippingPostalZipCode: '',
    shippingStateProvince: '00',
    shippingOption: shipping_method,
  })

  useEffect(() => {
    dispatch(fetchShippingOptions(shippingInfo.shippingStateProvince))
  }, [shippingInfo.shippingStateProvince])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setShippingDetails(shippingInfo))
    dispatch(setBillingDetails(shippingInfo))
    dispatch(setFulfillmentData(shippingInfo.shippingOption))
    setShippingInfo({
      ...shippingInfo,
      shippingName: '',
      shippingStreet: '',
      shippingCity: '',
      shippingPostalZipCode: '',
      shippingStateProvince: '00',
      shippingOption: shipping_method,
    })
    setNextPage(nextPage + 1)
  }

  function handleFormChange(e) {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
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
          onChange={handleFormChange}
          name="shippingPostalZipCode"
          placeholder="Enter your postal/zip code"
          required
        />
        <label className="checkout__label" htmlFor="shippingStateProvince">
          State/province
        </label>
        <select
          value={shippingInfo.shippingStateProvince}
          name="shippingStateProvince"
          onChange={handleFormChange}
          className="checkout__select"
        >
          <option className="checkout__option" disabled>
            State/province
          </option>
          {Object.keys(shipping_subdivisions).map((index) => {
            return (
              <option value={index} key={index}>
                {shipping_subdivisions[index]}
              </option>
            )
          })}
          ;
        </select>

        <label className="checkout__label" htmlFor="shippingOption">
          Shipping method
        </label>
        <select
          value={shippingInfo.shippingOption}
          name="shippingOption"
          onChange={handleFormChange}
          className="checkout__select"
        >
          <option className="checkout__select-option" disabled>
            Select a shipping method
          </option>
          {shipping_options.map((method, index) => {
            return (
              <option
                className="checkout__select-option"
                value={method.id}
                key={index}
              >{`${method.description} - ${method.price.formatted_with_code}`}</option>
            )
          })}
          ;
        </select>

        <button type="submit" className="checkout__btn-confirm">
          Confirm Order
        </button>
      </form>
    </div>
  )
}

export default Shipping
