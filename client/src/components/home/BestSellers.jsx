import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bestSellersFetch } from '../../redux/api';
import { Grid, Stack, CardMedia } from '@mui/material'
import useWindowSize from '../../hooks/useWindowSize'
import { Link } from 'react-router-dom';

const BestSellers = () => {

    const size = useWindowSize();
    
    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.persistedReducer.products.bestSellers)

    useEffect(() => {
        dispatch(bestSellersFetch())
    }, [])

    return (
        <>
            <h1 style={size <= 768 ? { fontSize: 60, textAlign: 'center' } : { fontSize: 60 }}>
                Best Sellers
            </h1>
            <Grid container spacing={4} alignItems='center' justifyContent='center'>
                {bestSellers.map((product, index) => {
                    return (
                        <Grid key={index} className='bestseller' item lg={4} md={6} sm={6}>
                            <Stack direction='column' justifyContent='center'>
                                <Link to={`/product/${product.id}`}>
                                    <CardMedia
                                        component='img'
                                        src={`http://${process.env.REACT_APP_IMAGE_PATH}/${product.image_path}`}
                                    />
                                </Link>
                                <Stack direction='row' justifyContent='space-between'>
                                    <h2>{product.name}</h2>
                                    <h2>{product.price} $</h2>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default BestSellers