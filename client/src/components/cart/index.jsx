import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useWindowSize from '../../hooks/useWindowSize'
import Header from '../../layout/header'
import closeIcon from '../../assets/icons/x.svg'
import { Box, Grid, Stack } from '@mui/material'
import { increaseQuantity, lowerQuantity } from '../../redux/cartSlice'

const Cart = () => {

  const dispatch = useDispatch();

  const size = useWindowSize();
  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
  const test = useSelector((state) => state.persistedReducer.cart)

  return (
    <>
      <Header />
      <Box sx={{ textAlign: 'center', border: '1px black solid', borderLeft: 0, borderTop: 0, borderRight: 0, margin: 0, padding: 0 }}>
        <h1 style={{
          margin: 0, padding: 0, display: 'flex',
          justifyContent: 'center', alignItems: 'center', width: '100%', fontSize: `${size < 600 ? '80px' : '100px'}`
        }}>Cart</h1>
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} sm={8} sx={{ height: 550, overflow: 'auto' }}>
            {cart.map((product, index) => {
              return (
                <>
                  <Grid container key={index}>
                    <Grid item xs={12}>
                      <Stack direction='row' spacing={3}>
                        <img src={`http://${process.env.REACT_APP_IMAGE_PATH}/${product.image_path}`} style={{ width: '20%', borderRadius: 10, height: 'auto', objectFit: 'contain' }} />
                        <Stack direction='column'>
                          <h1>Product: {product.name}</h1>
                          <h1>Price: {product.price}€</h1>
                        </Stack>
                        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                          <Stack direction='column' sx={{border: 1}} spacing={2} alignItems='center'>
                            <Box>
                              <img src={closeIcon}/>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <button onClick={() => dispatch(lowerQuantity(product))}>-</button>
                              <h4>{product.cartQuantity}</h4>
                              <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
                            </Box>
                          </Stack>
                        </Box>
                      </Stack>
                      <Box sx={{ pt: 1 }}>

                      </Box>
                    </Grid>
                  </Grid>
                </>
              )
            })}

          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ height: 300, m: 0, p: 0, border: '1px black solid', borderRadius: 5, p: 2 }}>
              <Stack direction='column' justifyContent='space-between' sx={{ height: '100%', width: '100%' }}>
                <h1 style={{ margin: 0, padding: 0 }}>Order Summary:</h1>
                <h2>Total: </h2>
                <Box>
                  <h1>Total cart quantity: {test.cartTotalQuantity}</h1>
                  <h1>Total cart amount: {test.cartTotalAmount}</h1>
                  <button style={{ width: '100%' }}>Checkout</button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </>
  )
}

export default Cart