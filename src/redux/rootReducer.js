import { combineReducers } from 'redux'
import shopReducer from './Shopping/shoppingReducers'

const rootReducer = combineReducers({
  shop: shopReducer,
})

export default rootReducer
