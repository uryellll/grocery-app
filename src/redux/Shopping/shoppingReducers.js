import * as actionTypes from './shoppingTypes'
import data from '../../Components/data'

const products = data.products.map((item) => {
  return {
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    type: item.type,
  }
})

const INITIAL_STATE = {
  products: products,
  category: '',
  cart: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //finding item in the products array
      const item = state.products.find((prod) => prod.id === action.payload.id)
      //checking if the item is in the cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false,
      )
      return {
        //copy the original state of the array
        ...state,
        cart: inCart
          ? //if inCart is true
            state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : //if inCart is false
            [...state.cart, { ...item, quantity: 1 }],
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case actionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.quantity !== 0
            ? item.id === action.payload.id
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

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }

    default:
      return state
  }
}

export default shopReducer
