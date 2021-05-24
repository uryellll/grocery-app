import * as actionTypes from '../ActionTypes/shoppingTypes'

const INITIAL_STATE = {
  products: [],
  category: '',
  cart: {},
  cart_id: '',
  checkout_token: {},
  shipping_details: {
    shipping_name: '',
    shipping_street: '',
    shipping_city: '',
    shipping_state_province: '',
    shipping_postal_zip_code: '',
    shipping_country: 'PH',
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

    case actionTypes.SET_CHECKOUT_TOKEN:
      return {
        ...state,
        checkout_token: action.payload,
      }
    case actionTypes.SET_SHIPPING_OPTIONS:
      return {
        ...state,
        shipping_data: {
          ...state.shipping_data,
          shipping_options: action.payload.shipping_options,
          shipping_option: action.payload.shipping_option,
        },
      }

    default:
      return state
  }
}

export default shopReducer
