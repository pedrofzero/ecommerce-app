import React from 'react'
import { Grid, Box } from '@mui/material'
import useWindowSize from '../../hooks/useWindowSize'

const Hero = () => {

    const size = useWindowSize();

    return (
        <Grid container sx={{ width: '100%', height: '100%' }}>
            <Grid item md={6} sx={{ width: '100%' }}>
                <h1 style={size <= 768 ? { fontSize: 40, textAlign: 'center' } : { fontSize: 80 }}>
                    A new shopping experience, tailored to you.
                </h1>
            </Grid>
            <Grid item md={6} sm={0} sx={{ width: '100%' }}>
                <Box
                    component='img'
                    sx={{
                        margin: 'auto',
                        height: '800px',
                        objectFit: 'cover',
                        width: '100%'
                    }}
                    // src='https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'>
                    src='https://images.unsplash.com/photo-1578592383917-2f0c0f16c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Hero