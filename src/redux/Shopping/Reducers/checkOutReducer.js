import * as actionTypes from '../ActionTypes/CheckoutActionTypes'

const INITIAL_STATE = {
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
}

const checkOutReducer = (state = INITIAL_STATE, action) => {
  switch (action.Type) {
    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        line_items: action.payload,
      }
    case actionTypes.SET_CUSTOMER_INFO:
      return {
        ...state,
        customer: action.payload,
      }
    case actionTypes.SET_SHIPPING_DETAILS:
      return {
        ...state,
        shipping: action.payload,
        billing: action.payload,
      }

    case actionTypes.SET_SHIPPING_FULFILLMENT_DATA:
      return {
        ...state,
        fulfillment: action.payload,
      }

    case actionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        payment: action.payload,
      }

    case actionTypes.CLEAR_CHECKOUT:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default checkOutReducer
