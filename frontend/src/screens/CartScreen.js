import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

function CartScreen({ match, location }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split("=")[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }

    }, [dispatch, productId, qty])


    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
