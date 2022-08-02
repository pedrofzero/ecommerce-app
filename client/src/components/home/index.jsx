import React, { useEffect, useState, useRef } from 'react'
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Header from '../../layout/header'
import axios from 'axios'
import { gsap } from 'gsap';

const Home = () => {

    gsap.registerPlugin(ScrollTrigger); 


    const [windowWidth, setWindowWidth] = useState(window.innerwidth);
    const [cartOpen, setCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();

    // Window Width Update
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    })

    
    // Get Best Sellers
    const getBestSellers = () => {
        axios.get(`http://45.136.70.211:3001/getBestSellers`)
            .then((response) => {
                setProduct(response.data)
                setIsLoading(false);
                // console.log(product)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getBestSellers();
    }, [])



    // GSAP Animations
    const bestSellers = useRef();

    useEffect(() => {
        gsap.fromTo(bestSellers.current, { opacity: 0 }, {
            opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: bestSellers.current,
                start: "top top",
                toggleActions: "play none play none"
            }
        })
    })



    ///////////////////

    return (
        <>
            {!isLoading &&
                <>
                    <Header />
                    <Container maxWidth="xl" sx={{ pt: 4 }}>
                        <Grid container>
                            <Grid item md={6}>
                                <h1 style={windowWidth <= 768 ? { fontSize: 40, textAlign: 'center' } : { fontSize: 80 }}>
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
                                    src='https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ pt: 4, pb: 4 }} />

                        {/* spacing */}
                        <Box sx={{ my: 2 }} />

                        <h1 style={windowWidth <= 768 ? { fontSize: 60, textAlign: 'center' } : { fontSize: 60 }}>
                            Best Sellers
                        </h1>
                        <Grid ref={bestSellers} container spacing={4} alignItems='center' justifyContent='center'>
                            {product.map((product, index) => {
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
                            <Grid item sm={12} md={6} sx={{ textAlign: 'center', margin: 0, border: '1px red solid', padding: 0 }}>
                                <h1 style={{ fontSize: 80, margin: 0, padding: 0 }}>Our Ethics</h1>
                                <h2 style={{ fontSize: 30 }}>We are proud to build a better system in favour of our customers, to keep the experience as fast and easy as possible.</h2>
                            </Grid>

                            <Grid item sm={12} md={6}>
                                <CardMedia
                                    component='img'
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
            }
        </>

    )
}

export default Home