import { combineReducers } from 'redux'
import shopReducer from './Shopping/Reducers/shoppingReducers'
import checkOutReducer from './Shopping/Reducers/checkOutReducer'

const rootReducer = combineReducers({
  shop: shopReducer,
  checkOut: checkOutReducer,
})

export default rootReducer
