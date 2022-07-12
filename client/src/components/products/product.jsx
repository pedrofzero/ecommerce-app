import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Button, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'

const SingleProduct = () => {

    const params = useParams();
    const id = params.id;

    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(0)
    const [product, setProduct] = useState();

    const getShirt = () => {
        axios.get(`http://localhost:3000/getShirt?id=${id}`)
        .then((response) => {
            setProduct(response.data[0])
            setIsLoading(false);
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
            <Container sx={{ my: 2 }}>
                <Grid container>
                    <Grid item md={6}>
                        <CardMedia 
                        component='img'
                        src='https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                        />        
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ border: '1px red solid'}}>
                            <Typography variant='h2'>{product.name}</Typography>
                            <Typography variant='h4'>{product.description}</Typography>
                            <Box sx={{my: 4}}/>
                            <Stack direction='row' spacing={4}>
                                <Typography variant='h4'>{product.price}€</Typography>
                                <Box
                                sx={{border: '1px solid black', borderRadius: '10px', width: '200px', height: '50px'}}>
                                    <Typography sx={{textAlign: 'center', height: '100%'}}>Add to Cart</Typography>  
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
 
            </Container>
            </>
         }
        </>
    )
}

export default SingleProduct