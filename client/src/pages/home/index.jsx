import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bestSellersFetch } from '../../redux/api';
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import Marquee from "react-fast-marquee";
import Header from '../../layout/header'
import BestSellers from '../../components/BestSellers';
import Contact from '../../components/Contact';
import Menu from '../../layout/menu';
import image from '../../assets/Vb9fn66eyuFjLSSKQEk7Lo.jpeg'



const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const size = useWindowSize();

    return (
        <>
            <Header setMenuOpen={setMenuOpen} />
            <img src='https://res.cloudinary.com/daibebfol/image/upload/v1668018809/Vb9fn66eyuFjLSSKQEk7Lo_dufaua.jpg' className='object-fit w-full m-auto'/>

            <div className='border-2 border-solid border-black'></div>
            <BestSellers />


            <Box sx={{ padding: '2rem' }}></Box>

            <Marquee speed="150">
                <div className='text-6xl'>
                    <span style={{ paddingRight: '40px' }}>innovative -</span>
                    <span style={{ paddingRight: '40px' }}>fresh -</span>
                    <span style={{ paddingRight: '40px' }}>style -</span>
                    <span style={{ paddingRight: '40px' }}>advanced -</span>
                    <span style={{ paddingRight: '40px' }}>kewl</span>
                </div>
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