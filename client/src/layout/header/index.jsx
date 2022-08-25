import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, Stack, Typography } from '@mui/material'
import Cart from '../cart'
import Menu from '../menu'

const Header = ({ cartOpen, setCartOpen }) => {

    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>

            {menuOpen &&
                <>
                    <Menu open={setMenuOpen} />
                </>
            }

            <Box sx={{ height: 100, width: '100%' }}>
                <Stack direction='row' justifyContent='space-between' sx={{ height: '100%', px: 2 }}>
                    <a><h1 onClick={() => setMenuOpen(true)} style={{ margin: 0, cursor: 'pointer' }}>menu</h1></a>
                    <a><h1 onClick={() => navigate('/home')} style={{ margin: 0, cursor: 'pointer' }}>home</h1></a>
                    <Stack direction='row'>
                        <h1 onClick={() => setCartOpen(true)} style={{ margin: 0, cursor: 'pointer' }}>cart</h1>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Header