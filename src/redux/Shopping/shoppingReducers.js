import * as actionTypes from './shoppingTypes'
import data from '../../Components/data'

const vegetables = data.products.vegetables.map((item) => {
  return { id: item.id, name: item.name, image: item.image, price: item.price }
})
const snacks = data.products.snacks.map((item) => {
  return { id: item.id, name: item.name, image: item.image, price: item.price }
})
const drinks = data.products.drinks.map((item) => {
  return { id: item.id, name: item.name, image: item.image, price: item.price }
})
const meatPoultry = data.products.meatPoultry.map((item) => {
  return { id: item.id, name: item.name, image: item.image, price: item.price }
})

const INITIAL_STATE = {
  products: {
    vegetables,
    snacks,
    drinks,
    meatPoultry,
  },
  cart: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find()
      return {}
    case actionTypes.REMOVE_FROM_CART:
      return {}
    case actionTypes.ADJUST_QUANTITY:
      return {}
    case actionTypes.REMOVE_FROM_CART:
      return {}
    default:
      return state
  }
}

export default shopReducer
