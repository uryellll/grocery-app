import * as actionTypes from './shoppingTypes'

const INITIAL_STATE = {
  products: [],
  category: '',
  cart: [],
  cart_id: '',
  checkout_token: {},
  customerInfo: {
    firstName: '',
    lastName: '',
    email: '',
  },
  shippingDetails: {
    shipping_name: '',
    shipping_street: '',
    shipping_city: '',
    shipping_state_province: '',
    shipping_postal_zip_code: '',
    shipping_country: '',
  },
  paymentDetails: {
    card_number: '',
    exp_month: '',
    exp_year: '',
    ccv: '',
    billing_postal_zip_code: '',
  },
  shipping_data: {
    shippingCountries: {},
    shippingSubdivisions: {},
    shippingOptions: [],
    shippingOption: '',
  },
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.RETRIEVE_CART:
      return {
        ...state,
        cart: action.payload.cart_items,
        cart_id: action.payload.cart_id,
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }

    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      }
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: action.payload,
      }
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product_id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case actionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.quantity !== 0
            ? item.product_id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item,
        ),
      }
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }

    case actionTypes.SET_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
        },
      }
    case actionTypes.SET_PAYMENT_DETAILS:
      return {
        ...state,
        paymentDetails: {
          card_number: action.payload.card_number,
          exp_month: action.payload.exp_month,
          exp_year: action.payload.exp_year,
          ccv: action.payload.ccv,
        },
      }

    default:
      return state
  }
}

export default shopReducer
