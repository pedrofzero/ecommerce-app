import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, Stack, Typography, Divider } from '@mui/material';
import Cart from '../cart'
import Menu from '../menu'

const Header = ({ setCartOpen, setMenuOpen }) => {

    let navigate = useNavigate();

    return (
        <>
            {/* sort out the fixed stuff laters */}
            <Box sx={{ width: '100%', top: 0, zIndex: 10, backgroundColor: '#fcf5ed' }}>
                <Stack direction='row' justifyContent='space-between' sx={{ px: 2, height: '100%' }}>
                    <a><h1 onClick={() => setMenuOpen(true)} style={{ margin: 0, cursor: 'pointer' }}>menu</h1></a>
                    <a><h1 onClick={() => navigate('/home')} style={{ margin: 0, cursor: 'pointer' }}>home</h1></a>
                    <Stack direction='row' sx={{ p: 0, m: 0 }}>
                        <h1 onClick={() => setCartOpen(true)} style={{ margin: 0, cursor: 'pointer' }}>cart</h1>
                    </Stack>
                </Stack>
                <Box sx={{ pb: 2 }}></Box>
                <Box sx={{ border: '1px solid black', borderLeft: 0, borderRight: 0 }}></Box>
            </Box>
        </>
    )
}

export default Header