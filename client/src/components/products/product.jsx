import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Button, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import Header from '../../layout/header'

const SingleProduct = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();

    // get product id
    const params = useParams();
    const id = params.id;

    const getShirt = () => {
        axios.get(`http://45.136.70.211:3001/getShirt?id=${id}`)
            .then((response) => {
                setProduct(response.data[0])
                setIsLoading(false);
                console.log(product)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getShirt();
    }, [])

    return (
        <>
            {!isLoading &&
                <>
                    <Header />
                    <Grid container sx={{ px: 2, margin: 0, padding: 0, border: '1px red solid' }}>
                        <Grid item sm={12} md={6}>

                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Box style={{ margin: 0, padding: 0 }}>
                                <h1 style={{ fontSize: 60, textAlign: 'center', margin: 0 }}>
                                    {product.name}
                                </h1>
                                <p style={{ fontSize: 60, textAlign: 'center', margin: 0, padding: 0 }}>
                                    {product.description}
                                </p>
                                <Box sx={{
                                    backgroundColor: '#000', borderRadius: '10px', color: 'white', width: '500px', height: '50px', textAlign: 'center', margin: '0 auto', cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#eb4034'
                                    }
                                }}>
                                    <h1>Add to Cart</h1>
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