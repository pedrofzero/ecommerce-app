import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack } from '@mui/material';
import { productsFetch, productsFetchByFilter } from '../../redux/api'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../layout/header'
import Menu from '../../layout/menu';
import { useNavigate } from 'react-router-dom';
import Cart from '../../layout/cart';
import useWindowSize from '../../hooks/useWindowSize';

const Products = () => {

    const size = useWindowSize();
    const navigate = useNavigate();

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.persistedReducer.products.items)

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await dispatch(productsFetch());
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

            {menuOpen &&
                <Menu open={menuOpen} setMenuOpen={setMenuOpen} />
            }
            {cartOpen &&
                <Cart open={cartOpen} setCartOpen={setCartOpen} />
            }

            {!loading &&
                <>
                    <Header setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 style={{
                            margin: 0, padding: 0, display: 'flex',
                            justifyContent: 'center', alignItems: 'center', width: '100%', fontSize: `${size < 600 ? '80px' : '100px'}`
                        }}>Collection</h1>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3}>
                            <Box sx={{ border: '1px black solid', borderLeft: 0, textAlign: 'center' }}>
                                <h1>Filter</h1>
                            </Box>
                            <Stack direction='column'  sx={{ border: '1px black solid', borderLeft: 0, textAlign: 'center', lineHeight: '20px', py: 2 }}>
                                <h1 style={{cursor: 'pointer'}} onClick={() => dispatch(productsFetch())}>All</h1>
                                <h1 style={{cursor: 'pointer'}} onClick={() => dispatch(productsFetchByFilter('kids'))}>Kids</h1>
                                <h1 style={{cursor: 'pointer'}} onClick={() => dispatch(productsFetchByFilter('men'))}>Men</h1>
                                <h1 style={{cursor: 'pointer'}} onClick={() => dispatch(productsFetchByFilter('women'))}>Women</h1>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9}>
                            <Grid container sx={{  }}>
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

            }
        </>

    )
}

export default Products