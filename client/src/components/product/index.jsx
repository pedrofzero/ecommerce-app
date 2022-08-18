import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProductFetch } from '../../redux/api'
import { addToCart } from '../../redux/cartSlice'
import { Box, Grid } from '@mui/material'
import Header from '../../layout/header'

const SingleProduct = () => {

    const [loading, setLoading] = useState(true);

    // get product id
    const params = useParams();
    const id = params.id

    const dispatch = useDispatch()
    const currentProduct = useSelector((state) => state.persistedReducer.products.currentProduct)

    useEffect(() => {
        dispatch(singleProductFetch(id));
        if (currentProduct.length !== 0) {
            setLoading(false)
        }
    }, [])


    const handleAddToCart = (product) => {
        dispatch(addToCart(product[0]))
    }

    return (
        <>
            {!loading
                &&
                <>
                    <Header />
                    <Grid container sx={{ px: 2, margin: 0, padding: 0, border: '1px red solid' }}>
                        <Grid item sm={12} md={6}>

                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Box style={{ margin: 0, padding: 0 }}>
                                <h1 style={{ fontSize: 60, textAlign: 'center', margin: 0 }}>
                                    {currentProduct[0].name}
                                </h1>
                                <p style={{ fontSize: 60, textAlign: 'center', margin: 0, padding: 0 }}>
                                    {currentProduct[0].description}
                                </p>
                                <Box sx={{
                                    backgroundColor: '#000', borderRadius: '10px', color: 'white', width: '500px', height: '50px', textAlign: 'center', margin: '0 auto', cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#eb4034'
                                    }
                                }}>
                                    <h1 onClick={() => handleAddToCart(currentProduct)}>Add to Cart</h1>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </>
            }

        </>
    )
}

export default SingleProduct