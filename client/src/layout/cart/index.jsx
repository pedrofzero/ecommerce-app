import React, { useRef, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { Box, Divider, Stack, Grid } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Cart = ({ cartOpen, setCartOpen }) => {


    const size = useWindowSize();

    const ref = useRef();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
    console.log(cart.length)


    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <>
            {size < 768 ?
                <>
                    <Box sx={{ position: 'fixed', height: '100%', width: '100%', top: 0, left: 0, zIndex: 1000, overflow: 'hidden', backgroundColor: 'white' }}>

                        <Stack direction='row' justifyContent='space-between' sx={{ margin: 0, padding: 2.5 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ArrowBackIosNewIcon onClick={() => setCartOpen(false)} />
                            </Box>
                            <h1>Cart</h1>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <MoreVertIcon />
                            </Box>
                        </Stack>

                        <Box sx={{ padding: '2rem' }}></Box>

                        {cart.length !== 0 ?
                                <Grid container spacing={5} direction='column' alignItems="center" justifyContent="center">
                                    {cart.map((product, index) => {
                                        return (
                                            <>
                                                <Grid item key={index} xs={12}>
                                                    <Stack direction='row' spacing={10} sx={{border: '1px red solid', backgroundColor: '#ededec'}}>
                                                        <img src={`http://${process.env.REACT_APP_IMAGE_PATH}/${product.image_path}`} style={{ height: 160, width: 160 }} />
                                                        
                                                        <Box>
                                                            <Stack direction='column' sx={{ display: 'flex', height: '100%' }}>
                                                                <h3>{product.name}</h3>
                                                                <Stack direction='row' spacing={3} sx={{}}>
                                                                    <Box onClick={() => handleRemoveFromCart(product)} sx={{ position: 'relative', textAlign: 'center', border: '1px solid', borderRadius: 2, height: 20, width: 20 }}>
                                                                        <h4>-</h4>
                                                                    </Box>
                                                                    <Box onClick={() => handleAddToCart(product)} sx={{ textAlign: 'center', border: '1px solid', borderRadius: 2, height: 20, width: 20 }}>
                                                                        <h4>+</h4>
                                                                    </Box>
                                                                </Stack>
                                                            </Stack>
                                                        </Box>
                                                        <h3 style={{ fontSize: 40, display: 'flex', alignItems: 'center' }}>{product.price * product.cartQuantity}€</h3>

                                                    </Stack>
                                                </Grid>
                                            </>
                                        )
                                    })
                                    }
                                </Grid>
                            :
                            <>
                                <Box sx={{textAlign: 'center', fontSize: 25, paddingTop: 20}}>
                                    <h1>
                                        Your cart is empty. 😥
                                    </h1>
                                    <h1>
                                        Time to add some products! 😎
                                    </h1>
                                </Box>
                            </>
                        }

                    </Box>
                </>
                :
                <>
                    <div ref={ref} style={styles.sidebar}>
                        <h2 style={{ textAlign: 'right' }} onClick={() => setCartOpen(false)}>Close</h2>
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
                </>
            }
        </>



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

export default Cart


