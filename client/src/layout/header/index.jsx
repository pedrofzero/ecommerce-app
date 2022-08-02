import { Badge, Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar'
import Menu from '../menu'

const Header = () => {

    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
        {/* Sidebar */}
        {isVisible &&
            <>
                <Sidebar open={setIsVisible}/>
            </>
        }

        {menuOpen &&
            <>
                <Menu open={setMenuOpen}/>
            </>
        }

        <Box sx={{ height: 100, width: '100%' }}>
            <Stack direction='row' justifyContent='space-between' sx={{ height: '100%', px: 2 }}>
                <h1 onClick={() => setMenuOpen(true)}>menu</h1>
                <h1 onClick={() => navigate('/home')} style={{fontSize: 50, margin: 0, cursor: 'pointer'}}>home</h1>
                <Stack direction='row'>
                    <h1 onClick={() => setIsVisible(true)}>cart</h1>
                </Stack>
            </Stack>
        </Box>
        </>
    )
}

export default Header