import React, { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { bestSellersFetch } from '../../redux/api';
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import Marquee from "react-fast-marquee";
import Header from '../../layout/header'
import BestSellers from '../../components/BestSellers';
import Contact from '../../components/Contact';
import ShowProduct from '../../components/ShowProduct';



const Home = () => {

    const size = useWindowSize();
    const dispatch = useDispatch();

    const getFrontPageData = () => {
        dispatch(bestSellersFetch())
        dispatch(menProductsFetch())
        dispatch(womenProductsFetch())
    }

    const bestSellers = useSelector((state) => state.persistedReducer.products.bestSellers)
    console.log(bestSellers)


    return (
        <>
            <Header />
            <img src='https://res.cloudinary.com/daibebfol/image/upload/v1668018809/Vb9fn66eyuFjLSSKQEk7Lo_dufaua.jpg' className='object-fit w-full m-auto' />

            <div className='border-2 border-solid border-black'></div>
            <ShowProduct title="Best Sellers" data={bestSellers}/>

            <Box sx={{ padding: '2rem' }}></Box>

            {/* <ShowProduct title="Men" data={menProducts} /> */}


            <Marquee speed="150">
                <div className='text-6xl'>
                    <span style={{ paddingRight: '40px' }}>innovative -</span>
                    <span style={{ paddingRight: '40px' }}>fresh -</span>
                    <span style={{ paddingRight: '40px' }}>stylish -</span>
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