import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bestSellersFetch } from '../../redux/api';
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import Marquee from "react-fast-marquee";
import Header from '../../layout/header'

const Home = () => {

    const size = useWindowSize();
    const [cartOpen, setCartOpen] = useState(false);

    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.persistedReducer.products.bestSellers)

    useEffect(() => {
        dispatch(bestSellersFetch())
    }, [])


    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ pt: 4 }}>
                <Grid container>
                    <Grid item md={6}>
                        <h1 style={size <= 768 ? { fontSize: 40, textAlign: 'center' } : { fontSize: 80 }}>
                            A new shopping experience, tailored to you.
                        </h1>
                    </Grid>
                    <Grid item md={6} sm={0}>
                        <Box
                            component='img'
                            sx={{
                                margin: 'auto',
                                height: 'auto',
                                width: '100%'
                            }}
                            // src='https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'>
                            src='https://images.unsplash.com/photo-1578592383917-2f0c0f16c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ pt: 4, pb: 4 }} />

                {/* spacing */}
                <Box sx={{ my: 2 }} />

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
                                                    src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbhEh1UcaI0-who2Z2z5jevpCGT0Pc3tvY4ucC68Q4AuObWjKEPA4bwy-jzcD4Zy_kd6iKUVl9DxgF&usqp=CAc'
                                                />
                                            </Link>
                                            <Stack direction='row' justifyContent='space-between'>
                                                <h2>{product.name}</h2>
                                                <h2>{product.price} $   </h2>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                )
                            })}
                        </Grid>
            </Container>
            <Marquee speed="150">
                <Box sx={{ fontSize: 140 }}>
                    <span style={{ paddingRight: '40px' }}>innovative -</span>
                    <span style={{ paddingRight: '40px' }}>fresh -</span>
                    <span style={{ paddingRight: '40px' }}>style -</span>
                    <span style={{ paddingRight: '40px' }}>advanced -</span>
                    <span style={{ paddingRight: '40px' }}>kewl</span>
                </Box>
            </Marquee>

            <Box sx={{ p: 4 }} />

            <Container maxWidth="xl" sx={{ pt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={12} sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
                        <h1 style={{ fontSize: 80, margin: 0, padding: 0 }}>Our Ethics</h1>
                        <h2 style={{ fontSize: 30 }}>We are proud to build a better system in favour of our customers, to keep <u>your</u> experience as fast and easy as possible.</h2>
                    </Grid>

                    <Grid item sm={12} md={12}>
                        <CardMedia
                            component='img'
                            height='600'
                            src='https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80'
                        />
                    </Grid>
                </Grid>
                <Box sx={{ p: 4 }} />

                <Grid container>
                    <Grid item sm={12}>
                        <Stack direction='column'>
                            <Box sx={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: 40 }}>Got any questions for us? Write us, we would love to help you out!</h2>
                            </Box>
                            <Container>
                                <Box sx={{ height: '400px', margin: '0 auto' }}>
                                    <Stack direction='column' spacing={4}>
                                        <TextField id="outlined-basic" label="Name" variant="standard" />
                                        <TextField id="outlined-basic" label="E-mail" variant="standard" />
                                        <TextField id="outlined-multiline-flexible" placeholder="Write your message here." multiline maxRows={4} />
                                        <Box sx={{ height: 80, margin: '0 auto', width: 90, borderRadius: 40, backgroundColor: 'black', color: 'white', '&:hover': { cursor: 'pointer' } }}>
                                            <h2 style={{ textAlign: 'center' }}>Let's talk!</h2>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Home