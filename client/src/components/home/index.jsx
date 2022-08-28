import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bestSellersFetch } from '../../redux/api';
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import Marquee from "react-fast-marquee";
import Header from '../../layout/header'
import Cart from '../../layout/cart';
import Hero from './Hero';
import BestSellers from './BestSellers';
import Contact from './Contact';
import Menu from '../../layout/menu';

const Home = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen)

    if (cartOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <>

            {/* Modals */}
            {menuOpen &&
                <Menu open={menuOpen} setMenuOpen={setMenuOpen} />
            }


            <Header setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />

            <Container maxWidth="xl" sx={{ pt: 4 }}>

                <Hero />
                <Divider sx={{ pt: 4, pb: 4 }} />

                {/* spacing */}
                <Box sx={{ my: 2 }} />

                <BestSellers />

            </Container>

            <Box sx={{ padding: '2rem' }}></Box>

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

                <Contact />

            </Container>
        </>

    )
}

export default Home