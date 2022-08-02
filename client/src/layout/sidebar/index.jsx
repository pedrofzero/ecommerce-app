import { Box, Divider, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Sidebar = ({ open }) => {

    const ref = useRef();
    const cart = useSelector((state) => state.cart)
    console.log(cart)

    useEffect(() => {
        
    })

    return (
        <div ref={ref} style={styles.sidebar}>
            <Box sx={{ justifyContent: 'center', px: 2 }}>
                <h2 style={{ textAlign: 'right' }} onClick={() => open(false)}>Close</h2>
                <Divider />
                <Box sx={{ textAlign: 'center' }}>
                    {cart.length === 0 ?
                        <>
                        <h1>Your cart is empty!</h1>
                        </>
                        :
                        <>
                        <Stack direction='column'>
                            <h1>{cart}</h1>
                        </Stack>
                        </>
                    }
                </Box>
            </Box>
        </div>
    )
}

const styles = {
    sidebar: {
        backgroundColor: "#bababa",
        borderRadius: '10px 10px 0px 0px',
        border: '1px white solid',
        position: 'fixed',
        height: '100%',
        width: '500px',
        right: 0,
    }
}

export default Sidebar