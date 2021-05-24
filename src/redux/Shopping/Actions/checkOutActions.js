import * as actionTypes from '../ActionTypes/CheckoutActionTypes'
import { commerce } from '../../../lib/commerce'

export const setCartCheckOutItems = () => (dispatch, getState) => {
  const { cart } = getState().shop
  return dispatch({
    type: actionTypes.SET_CART_ITEMS,
    payload: cart,
  })
}

export const setCustomerInfo = (firstName, lastName, email) => {
  return {
    type: actionTypes.SET_CUSTOMER_INFO,
    payload: {
      firstname: firstName,
      lastname: lastName,
      email: email,
    },
  }
}

export const setShippingDetails = (shippingInfo) => {
  return {
    type: actionTypes.SET_SHIPPING_DETAILS,
    payload: {
      name: shippingInfo.shippingName,
      street: shippingInfo.shippingStreet,
      town_city: shippingInfo.shippingCity,
      county_state: shippingInfo.shippingStateProvince,
      postal_zip_code: shippingInfo.shippingPostalZipCode,
    },
  }
}

export const setBillingDetails = (shippingInfo) => {
  return {
    type: actionTypes.SET_BILLING_DETAILS,
    payload: {
      name: shippingInfo.shippingName,
      street: shippingInfo.shippingStreet,
      town_city: shippingInfo.shippingCity,
      county_state: shippingInfo.shippingStateProvince,
      postal_zip_code: shippingInfo.shippingPostalZipCode,
    },
  }
}

export const setPaymentDetails = (paymentInfo) => {
  return {
    type: actionTypes.SET_PAYMENT_DETAILS,
    payload: {
      number: paymentInfo.cardnumber,
      expiry_month: paymentInfo.expiry_month,
      expiry_year: paymentInfo.expiry_year,
      ccv: paymentInfo.ccv,
    },
  }
}

export const setPaymentMethod = (gateway, card_token) => {
  return {
    type: actionTypes.SET_PAYMENT_METHOD,
    payload: {
      gateway: gateway,
      card: {
        token: card_token,
      },
    },
  }
}

export const checkOutCapture = () => async (dispatch, getState) => {
  const { id } = getState().shop.checkout_token
  const { line_items, customer, shipping, fulfillment, billing, payment } =
    getState().checkout
  await commerce.checkout
    .capture(id, {
      line_items: line_items,
      customer: customer,
      shipping: shipping,
      fulfillment: fulfillment,
      billing: billing,
      payment: payment,
    })
    .then((response) => {
      console.log(response)
    })
}

export const setFulfillmentData = (shippingOption) => {
  return {
    type: actionTypes.SET_SHIPPING_FULFILLMENT_DATA,
    payload: shippingOption,
  }
}

export const fetchShippingOptions =
  (stateProvince) => async (dispatch, getState) => {
    const {
      checkout_token: { id },
    } = getState().shop

    await commerce.checkout
      .getShippingOptions(id, {
        country: 'PH',
        region: stateProvince || '00',
      })
      .then((options) => {
        const shippingOption = options[0] || null
        return dispatch(
          {
            type: actionTypes.SET_SHIPPING_OPTIONS,
            payload: options,
          },
          {
            type: actionTypes.SET_SHIPPING_FULFILLMENT_DATA,
            payload: shippingOption,
          },
        )
      })
      .catch((error) => {
        console.log('There was an error fetching the shipping methods', error)
      })
  }

export const setSubdivisions = () => async (dispatch, getState) => {
  const { shipping_country } = getState().shop.shipping_details
  await commerce.services
    .localeListSubdivisions(shipping_country)
    .then((subdivisions) => {
      return dispatch({
        type: actionTypes.SET_SUBDIVISIONS,
        payload: subdivisions.subdivisions,
      })
    })
    .catch((error) => {
      console.log('There was an error fetching the subdivisions', error)
    })
}
