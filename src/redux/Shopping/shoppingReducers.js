import * as actionTypes from './shoppingTypes'

const INITIAL_STATE = {
  products: products,
  displayedProducts: products,
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

    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload }

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }

    case actionTypes.FILTER_PRODUCTS:
      if (action.payload === '') {
        return {
          ...state,
          displayedProducts: products,
        }
      } else {
        const filteredProducts = state.products.filter(
          (item) => item.type === action.payload,
        )
        console.log(filteredProducts)
        return {
          ...state,
          displayedProducts: filteredProducts,
        }
      }

    default:
      return state
  }
}

export default shopReducer
