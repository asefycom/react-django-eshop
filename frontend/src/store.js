import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { listProductReducer, detailsProductReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    listProduct: listProductReducer,
    productDetails: detailsProductReducer,
    cart: cartReducer,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store