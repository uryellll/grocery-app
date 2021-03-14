import * as actionTypes from './shoppingTypes'

export const addToCart = (itemID) => {
  console.log(itemID + ' added')
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  }
}

export const removeFromCart = (itemID) => {
  console.log(itemID + ' removed')
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
