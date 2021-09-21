import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

} from '../constants/productConstatns'
import axios from 'axios'


export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/v1/products/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response
        })

    }
}