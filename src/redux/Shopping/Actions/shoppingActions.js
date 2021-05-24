import * as actionTypes from '../ActionTypes/shoppingTypes'
import { commerce } from '../../../lib/commerce'

export const fetchProducts = () => async (dispatch, getState) => {
  const { data } = await commerce.products.list()
  dispatch(setProducts(data))
}

export const addToCart = (productId, quantity) => async () => {
  await commerce.cart
    .add(productId, quantity)
    .then((item) => {
      console.log(item)
    })
    .catch((error) => {
      console.error('There was an error adding the item to the cart', error)
    })
}

export const retrieveCart = () => async (dispatch) => {
  const { id, line_items } = await commerce.cart.retrieve()
  return dispatch({
    type: actionTypes.RETRIEVE_CART,
    payload: {
      cart_items: line_items,
      cart_id: id,
    },
  })
}

export const removeFromCart = (itemID) => (dispatch) => {
  commerce.cart
    .remove(itemID)
    .then((resp) => {
      dispatch(updateCart(resp.cart.line_items))
    })
    .catch((error) => {
      console.error('There was an error removing the item from the cart', error)
    })
  return dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  })
}

export const updateCart = (line_items) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: line_items,
  }
}

export const increaseQuantity = (cartId, id, quantity) => (dispatch) => {
  commerce.cart.update(id, { quantity }).then((res) => {
    console.log(res)
  })
  return dispatch({
    type: actionTypes.INCREASE_QUANTITY,
    payload: {
      id: cartId,
      quantity: quantity,
    },
  })
}

export const emptyCart = () => async (dispatch) => {
  await commerce.cart.empty().then(() => {
    return dispatch({
      type: actionTypes.EMPTY_CART,
      payload: [],
    })
  })
}

export const reduceQuantity = (cartId, id, quantity) => async (dispatch) => {
  await commerce.cart.update(id, { quantity }).then((res) => {
    return dispatch({
      type: actionTypes.REDUCE_QUANTITY,
      payload: {
        id: cartId,
        quantity: quantity,
      },
    })
  })
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

export const setProducts = (value) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: value,
  }
}

export const getCheckoutToken = () => async (dispatch, getState) => {
  const { cart_id } = getState().shop
  console.log(cart_id)
  await commerce.checkout
    .generateToken(cart_id, { type: 'cart' })
    .then((token) => {
      return dispatch({
        type: actionTypes.SET_CHECKOUT_TOKEN,
        payload: token,
      })
    })
    .catch((error) => {
      console.log('There was an error in generating a token', error)
    })
}
