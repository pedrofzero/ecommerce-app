import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProductFetch } from '../../redux/api'
import { addToCart } from '../../redux/cartSlice'
import { Box, Grid, Stack } from '@mui/material'
import Menu from '../../layout/menu'
import Cart from '../../layout/cart'
import Header from '../../layout/header'
import useWindowSize from '../../hooks/useWindowSize'

const SingleProduct = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const size = useWindowSize();
    const [loading, setLoading] = useState(true);

    // get product id
    const params = useParams();
    const id = params.id

    const dispatch = useDispatch()
    const currentProduct = useSelector((state) => state.persistedReducer.products.currentProduct)

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await dispatch(singleProductFetch(id));
            setLoading(false)
        }

        fetchProduct();
    }, [])

    if (cartOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }


    const handleAddToCart = (product) => {
        dispatch(addToCart(product[0]))
    }

    return (
        <>
            {menuOpen &&
                <Menu open={menuOpen} setMenuOpen={setMenuOpen} />
            }
            {cartOpen &&
                <Cart open={cartOpen} setCartOpen={setCartOpen} />
            }

            {!loading
                &&
                <>
                    <Header setMenuOpen={setMenuOpen} setCartOpen={setCartOpen} />
                    <Grid container sx={{ px: 2, margin: 0, padding: '1em' }}>
                        <Grid item sm={12} md={6} sx={{ textAlign: 'center', padding: '1em' }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={`http://${process.env.REACT_APP_IMAGE_PATH}/${currentProduct[0].image_path}`} />

                        </Grid>
                        <Grid item sm={12} md={6} sx={{ paddingLeft: '10px' }}>
                            <Box style={{ margin: 0, padding: 0 }}>
                                <h1 style={{ fontSize: 60, margin: 0 }}>
                                    {currentProduct[0].name}
                                </h1>
                                <hr />
                                <p style={{ fontSize: 30, margin: 0, paddingTop: '2rem' }}>
                                    {currentProduct[0].description}
                                </p>
                                <Box sx={size < 768 ? { padding: '4em' } : { padding: '7em' }}></Box>

                                <Stack direction='row' justifyContent='space-between' sx={{}}>
                                    <p style={{ fontSize: 40, margin: 0, paddingTop: 40, textAlign: 'end' }}>{currentProduct[0].price}€</p>
                                    <Box sx={{ height: 100, width: 130, borderRadius: 40, backgroundColor: 'black', color: 'white', '&:hover': { cursor: 'pointer' } }}>
                                        <p onClick={() => handleAddToCart(currentProduct)} style={{ textAlign: 'center', fontSize: 25, }}>Add to cart</p>
                                    </Box>
                                </Stack>
                                <hr />

                            </Box>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}


export default SingleProduct