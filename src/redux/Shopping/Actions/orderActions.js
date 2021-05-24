import * as actionTypes from '../ActionTypes/OrderActionTypes'
import { commerce } from '../../../lib/commerce'

export const setOrderData = () => (dispatch, getState) => {
  const { line_items, customer, shipping, fulfillment, billing, payment } =
    getState().checkOut
  const orderData = {
    line_items,
    customer,
    shipping,
    fulfillment,
    billing,
    payment,
  }
  return dispatch({
    type: actionTypes.ORDER_DATA,
    payload: orderData,
  })
}
