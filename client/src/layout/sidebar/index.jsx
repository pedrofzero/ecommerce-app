import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'
import { Box, Divider, Stack } from '@mui/material'

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Sidebar = ({ open }) => {

    const ref = useRef();

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
    console.log(cart)

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <div ref={ref} style={styles.sidebar}>
            <h2 style={{ textAlign: 'right' }} onClick={() => open(false)}>Close</h2>
            <Box sx={{ justifyContent: 'center', px: 2 }}>
                <Divider />
                <Box sx={{ textAlign: 'center' }}>
                    {cart.length === 0 ?
                        <>
                        <h1>Your cart is empty!</h1>
                        </>
                        :
                        <>
                        <Stack direction='column'>
                            {cart.map((product, index) => {
                                return (
                                    <>
                                    <h4>{product.name}</h4>
                                    <h4>{product.cartQuantity}</h4>
                                    <button onClick={() => handleRemoveFromCart()}>+</button>
                                    <button onClick={() => handleRemoveFromCart(product)}>-</button>
                                    </>
                                )
                            })}
                        </Stack>
                        </>
                    }
                </Box>
            </Box>
        </div>
    )
}

const styles = {
    sidebar: {
        backgroundColor: "#bababa",
        borderRadius: '10px 10px 0px 0px',
        border: '1px white solid',
        position: 'fixed',
        height: '100%',
        width: '500px',
        right: 0,
    }
}

export default Sidebar