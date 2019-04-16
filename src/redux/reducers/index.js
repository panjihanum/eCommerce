import { combineReducers } from 'redux';
import products from './products';
import carts from './carts'
const appReducer = combineReducers({
    products: products,
    carts: carts
})

export default appReducer