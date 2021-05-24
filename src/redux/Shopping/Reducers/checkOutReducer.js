import * as actionTypes from '../ActionTypes/CheckoutActionTypes'

const INITIAL_STATE = {
  line_items: {},
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
      number: '',
      expiry_month: '',
      expiry_year: '',
      ccv: '',
    },
  },
  shipping_helpers: {
    shipping_subdivisions: [],
    shipping_options: [],
  },
}

const checkOutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        line_items: action.payload,
      }
    case actionTypes.SET_CUSTOMER_INFO:
      return {
        ...state,
        customer: {
          ...state.customer,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
        },
      }
    case actionTypes.SET_SHIPPING_DETAILS:
      return {
        ...state,
        shipping: action.payload,
      }

    case actionTypes.SET_BILLING_DETAILS:
      return {
        ...state,
        billing: action.payload,
      }

    case actionTypes.SET_SHIPPING_FULFILLMENT_DATA:
      if (action.payload !== ('' || null)) {
        return {
          ...state,
          fulfillment: {
            ...state.fulfillment,
            shipping_method: action.payload,
          },
        }
      }

    case actionTypes.SET_PAYMENT_DETAILS:
      return {
        ...state,
        payment: {
          ...state.payment,
          card: {
            ...state.payment.card,
            number: action.payload.number,
            expiry_month: action.payload.expiry_month,
            expiry_year: action.payload.expiry_year,
            ccv: action.payload.ccv,
          },
        },
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
    case actionTypes.SET_SHIPPING_OPTIONS:
      return {
        ...state,
        shipping_helpers: {
          ...state.shipping_helpers,
          shipping_options: action.payload,
        },
      }
    case actionTypes.SET_SUBDIVISIONS:
      return {
        ...state,
        shipping_helpers: {
          ...state.shipping_helpers,
          shipping_subdivisions: action.payload,
        },
      }
    default:
      return state
  }
}

export default checkOutReducer
