import React, { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux';
import { bestSellersFetch, menProductsFetch, womenProductsFetch } from '../../redux/api';
import { Box, Stack, Card, CardMedia, Container, Divider, Grid, TextField } from '@mui/material'
import Header from '../../layout/header'
import Contact from '../../components/Contact';
import ShowProduct from '../../components/ShowProduct';
import CustomMarquee from '../../components/CustomMarquee';


const Home = () => {

    const size = useWindowSize();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFrontPageData = async () => {
            await dispatch(bestSellersFetch())
            await dispatch(menProductsFetch())
            await dispatch(womenProductsFetch())
            setLoading(false)
        }
        getFrontPageData()
    }, [])


    const bestSellers = useSelector((state) => state.persistedReducer.products.bestSellers)
    const menProducts = useSelector((state) => state.persistedReducer.products.menProducts)
    const womenProducts = useSelector((state) => state.persistedReducer.products.womenProducts)

    return (
        <>
            <Header />
            <img src='https://res.cloudinary.com/daibebfol/image/upload/v1668018809/Vb9fn66eyuFjLSSKQEk7Lo_dufaua.jpg' className='object-fit w-full m-auto' />
            <div className='border-2 border-solid border-black'></div>

            {/* Product displays */}
            <ShowProduct title="New items" data={bestSellers} />
            {/* <div className='p-4' /> */}

            <ShowProduct title="For Men" data={menProducts} />
            {/* <div className='p-4' /> */}

            <ShowProduct title="For Women" data={womenProducts} />

            <CustomMarquee speed={150} text={["innovative", "fresh", "stylist"]} />

            <div className='flex flex-col m-auto text-center' style={{ maxWidth: '1400px' }}>
                <h1 className='text-7xl'>Our Ethics</h1>
                <p className='text-3xl pt-4 pb-6'>We are proud to build a better system in favour of our customers, to keep your experience as fast and easy as possible.</p>

                <img
                    className='object-cover'
                    src='https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80'
                />
            </div>
            <Contact />

        </>

    )
}

export default Home