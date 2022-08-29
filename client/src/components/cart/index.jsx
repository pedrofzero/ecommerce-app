import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import useWindowSize from '../../hooks/useWindowSize'
import Header from '../../layout/header'
import Menu from '../../layout/menu'
import closeIcon from '../../assets/icons/x.svg'
import { Box, Divider, Grid, Stack } from '@mui/material'
import { increaseQuantity, lowerQuantity, removeFromCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const size = useWindowSize();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
  const total = useSelector((state) => state.persistedReducer.cart.total)

  // stripe
  const key = process.env.REACT_APP_STRIPE_KEY;

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_URL_PATH}/api/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        navigate('/success', { data: res.data })
      } catch{}
    }
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate])


  
  return (
    <>

      {/* Modals */}
      {menuOpen &&
        <Menu open={menuOpen} setMenuOpen={setMenuOpen} />
      }

      <Header setMenuOpen={setMenuOpen} />
      <Box sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
        <h1 style={{
          margin: 0, padding: 0, display: 'flex',
          justifyContent: 'center', alignItems: 'center', width: '100%', fontSize: `${size < 600 ? '80px' : '100px'}`
        }}>Cart</h1>
      </Box>
      {cart.length !== 0
        ?
        <Grid container sx={{ p: 4, pt: 4 }}>
          <Grid item xs={12} md={8} sx={{ height: `${size < 900 ? '500px' : '50%'}`, overflow: 'auto' }}>
            {cart.map((product, index) => {
              return (
                <>
                  <Stack direction='row' spacing={3} sx={size < 900 && { justifyContent: 'center' }}>
                    <img src={`http://${process.env.REACT_APP_IMAGE_PATH}/${product.image_path}`} style={{ width: '20%', borderRadius: 10, height: 'auto', objectFit: 'contain' }} />
                    <Stack direction='column'>
                      <h1 >Product: {product.name}</h1>
                      <h2>Price: {product.price}€</h2>
                    </Stack>
                    <Box sx={{ width: '30%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <Stack direction='column' spacing={2} alignItems='center'>
                        <Box>
                          <img onClick={() => dispatch(removeFromCart(product))} src={closeIcon} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '5px', width: '100px', height: '50px' }}>
                          <button onClick={() => dispatch(lowerQuantity(product))}>-</button>
                          <h4 style={{ padding: '1em' }}>{product.quantity}</h4>
                          <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                  <Box sx={{ pt: 1 }}></Box>
                </>

              )

            })}
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ height: 300, m: 0, p: 0, border: '1px solid #0fc0fc', borderRadius: 5, p: 2, mr: 4 }}>
              <Stack direction='column' justifyContent='space-between' sx={{ height: '100%', width: '100%' }}>
                <h1 style={{ margin: 0, padding: 0 }}>Order Summary:</h1>
                <Box>
                  <h1>Total amount: {total}</h1>
                  <StripeCheckout
                    currency="EUR"
                    billingAddress
                    shippingAddress
                    bitcoin
                    amount={total * 100}
                    description={`Your total is: ${total}`}
                    token={onToken}
                    stripeKey={key}
                  >
                    <button style={{ width: '100%', backgroundColor: '#000', color: 'white', borderRadius: 10, height: '50px' }}>Checkout</button>
                  </StripeCheckout>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        :
        <>
          <Box sx={{ textAlign: 'center' }}>
            <h1>Your shopping cart is empty..</h1>
            <button style={{ width: '500px', backgroundColor: '#384E77', color: 'white', marginTop: '50px', borderRadius: 10, height: '70px', fontSize: '40px' }}
              onClick={() => navigate('/collections/all')}>Go shopping</button>
          </Box>
        </>
      }
    </>
  )
}

export default Cart