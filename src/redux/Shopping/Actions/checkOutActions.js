import * as actionTypes from '../ActionTypes/CheckoutActionTypes'
import { commerce } from '../../../lib/commerce'

export const setCartCheckOutItems = () => (dispatch, getState) => {
  const line_items = getState().shop.cart
  return dispatch({
    type: actionTypes.SET_CART_ITEMS,
    payload: line_items,
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
    .then((response) => console.log(response))
  return dispatch({
    type: actionTypes.CLEAR_CHECKOUT,
    payload: {
      line_items: {
        item_7RyWOwmK5nEa2V: {
          quantity: 1,
          variants: {
            vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym',
          },
        },
      },
      customer: {
        firstname: '',
        lastname: '',
        email: '',
      },
      shipping: {
        name: '',
        street: '',
        town_city: '',
        county_state: '',
        postal_zip_code: '',
        country: 'PH',
      },
      fulfillment: {
        shipping_method: '',
      },
      billing: {
        name: '',
        street: '',
        town_city: '',
        county_state: '',
        postal_zip_code: '',
        country: 'PH',
      },
      payment: {
        gateway: '',
        card: {
          token: '',
        },
      },
    },
  })
}

export const setFulfillmentData = (shippingOption) => {
  return {
    tpye: actionTypes.SET_SHIPPING_FULFILLMENT_DATA,
    payload: shippingOption.id,
  }
}
