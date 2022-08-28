import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetchByFilter } from '../../redux/api';
import { Box, Grid, Stack } from '@mui/material';
import Menu from '../../layout/menu';
import Header from '../../layout/header';
import Cart from '../../layout/cart';

const Category = () => {

    const navigate = useNavigate();

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const type = params.type;
    console.log(type)

    const dispatch = useDispatch();
    const products = useSelector((state) => state.persistedReducer.products.items)

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await dispatch(productsFetchByFilter(type));
            console.log(products)
            setLoading(false)
        }

        fetchProducts();
    }, [])


    if (cartOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <Header setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{
                    margin: 0, padding: 0, display: 'flex', justifyContent: 'center', border: '1px black', borderStyle: 'solid none', width: '100%', fontSize: '140px'
                }}>Collection</h1>
            </Box>
            <Grid container>
                <Grid item sm={12} md={3}>
                    <Box sx={{ border: '1px black solid', borderLeft: 0, textAlign: 'center' }}>
                        <h1>Filter</h1>
                    </Box>
                    <Stack direction='column' sx={{ border: '1px black solid', borderLeft: 0, textAlign: 'center', lineHeight: '20px', py: 2 }}>
                        <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/collections/all')}>All</h1>
                        <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/collections/kids')}>Kids</h1>
                        <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/collections/men')}>Men</h1>
                        <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/collections/women')}>Women</h1>
                    </Stack>
                </Grid>
                <Grid item sm={12} md={9}>
                    <Grid container sx={{}}>
                        {products.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={6} sx={{ border: '1px #272b24 solid', width: '100%', height: '100%' }}>
                                        <Box sx={{ padding: '2em' }}>
                                            <img onClick={() => navigate(`/product/${item.id}`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={`http://${process.env.REACT_APP_IMAGE_PATH}/${item.image_path}`} />
                                            <Stack direction='row' justifyContent='space-between'>
                                                <h1 key={index}>{item.name}</h1>
                                                <h1>{item.price}€</h1>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </>
                            )
                        })}

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Category