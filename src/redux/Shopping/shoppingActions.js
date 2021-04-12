import * as actionTypes from './shoppingTypes'
import axios from 'axios'

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}

export const adjustQuantity = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  }
}

export const reduceQuantity = (itemID, value) => {
  return {
    type: actionTypes.REDUCE_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  }
}

export const searchItem = (value) => {
  return {
    type: actionTypes.SEARCH_ITEM,
    payload: value,
  }
}

export const filterItems = (value) => {
  return {
    type: actionTypes.FILTER_ITEMS,
    payload: value,
  }
}

export const changeCategory = (value) => {
  return {
    type: actionTypes.SET_CATEGORY,
    payload: value,
  }
}

export const filterProducts = (value) => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: value,
  }
}

export const fetchProducts = () => (dispatch, getState) => {
  axios
    .get(process.env.REACT_APP_API)
    .then((res) => {
      console.log(res.data)
      const products = res.data
      dispatch(setProducts(products))
      dispatch(filterProducts(''))
    })
    .catch((err) => {
      console.log(err.message)
    })
}

export const setProducts = (value) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: value,
  }
}
