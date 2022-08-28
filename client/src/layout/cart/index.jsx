import React, { useRef, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQuantity, removeFromCart, lowerQuantity } from '../../redux/cartSlice'
import { Box, Divider, Stack, Grid, FormGroup } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Cart = ({ cartOpen, setCartOpen }) => {


    const size = useWindowSize();

    const ref = useRef();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.persistedReducer.cart.cartItems)

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
                    <Box style={styles.container}>
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
                                                <Stack direction='row' spacing={10} sx={{ border: '1px red solid', backgroundColor: '#ededec' }}>
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
                                <Box sx={{ textAlign: 'center', fontSize: 25, paddingTop: 20 }}>
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
                    <Box style={styles.container}>
                        <h2 onClick={() => setCartOpen(false)} style={{ textAlign: 'right', margin: 0, padding: '0.5em', paddingRight: 20 }}>close</h2>
                        <Box sx={{ justifyContent: 'center', px: 2 }}>
                            <Box sx={{ pl: 2 }}>
                                {cart.length === 0 ?
                                    <>
                                        <h1>Your cart is empty!</h1>
                                    </>
                                    :
                                    <>
                                        <h1>Order Summary</h1>
                                        <Box sx={{ height: '65vh', overflow: 'auto' }}>
                                            <Grid container sx={{  }}>
                                                {cart.map((product, index) => {
                                                    return (
                                                        <>
                                                            <Grid item xs={3} sx={{ m: 0, p: 0 }}>
                                                                <img src={`http://${process.env.REACT_APP_IMAGE_PATH}/${product.image_path}`} style={{ width: '100%', objectFit: 'contain' }} />
                                                            </Grid>
                                                            <Grid item xs={6} sx={{ height: '100%', textAlign: 'center' }}>
                                                                <Stack direction='column'>
                                                                    <h1>{product.name}</h1>
                                                                    <h1>{product.price}€</h1>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ textAlign: 'end' }}>
                                                                <Stack direction='column' spacing={4} sx={{}}>
                                                                    <button onClick={() => dispatch(removeFromCart(product))} style={{ background: 'none', fontSize: '1.5em' }}>X</button>
                                                                    <Stack direction='row' spacing={1} sx={{ m: 0, p: 0 }}>
                                                                        <button onClick={() => dispatch(lowerQuantity(product))} style={{ background: 'none', fontSize: '1.5em' }}>-</button>
                                                                        <h4>{product.cartQuantity}</h4>
                                                                        <button onClick={() => dispatch(increaseQuantity(product))} style={{ border: 'none', background: 'none', fontSize: '1.5em' }}>+</button>
                                                                    </Stack>
                                                                </Stack>
                                                            </Grid>
                                                            <Divider/>
                                                        </>
                                                    )
                                                })}
                                            </Grid>
                                        </Box>
                                        {/* <Box sx={{textAlign: 'center', pt: 4}}>
                                            <h1 style={{ border: '1px solid #eb6148', borderLeft: 0, borderRight: 0 }}>Total amount: </h1>
                                        </Box> */}
                                        <Box sx={{textAlign: 'center', pt: 4}}>
                                            <h1>Checkout</h1>
                                        </Box>
                                    </>
                                }
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </>



    )
}

const styles = {
    container: {
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '45%',
        borderRadius: 5,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        overflow: 'hidden',
        backgroundColor: '#fcf5ed',
        border: '1px red solid'
    },

    mobilecontainer: {
        overflow: 'hidden',
        backgroundColor: "#bababa",
        borderRadius: '10px 10px 0px 0px',
        border: '1px white solid',
        position: 'fixed',
        height: '100vh',
        width: '500px',
        right: 0,
    }
}

export default Cart


