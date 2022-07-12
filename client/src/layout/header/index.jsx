import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isLogged, setIsLogged] = useState()

    return (
        <div>
            <Box sx={{ height: '80px', backgroundColor: '#fffaaf' }}>
                <Box className="content" sx={{ mx: 4 }}>
                    <Stack justifyContent='space-between' direction='row' sx={{margin: 'auto', alignItems: 'center'}}>
                        <Typography>Store</Typography>
                        <Stack direction='row' spacing={4}>
                            <Link to="/login">
                                <Box 
                                sx={{border: '1px solid black', textAlign: 'center', width: '100px', borderRadius: '10px'}}
                                >
                                    <Typography>Login</Typography>
                                </Box>
                            </Link>
                            <Link to="/register">
                                <Box 
                                sx={{border: '1px solid black', textAlign: 'center', width: '100px', borderRadius: '10px'}}
                                >
                                    <Typography>Register</Typography>
                                </Box>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default Header