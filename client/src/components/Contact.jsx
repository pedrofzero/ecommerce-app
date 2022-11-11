import React from 'react'
import { Grid, Stack, Box, Container, TextField } from '@mui/material'

const Contact = () => {
    return (
        <>
            <Grid container>
                <Grid item sm={12}>
                    <Stack direction='column'>
                        <Box sx={{ textAlign: 'center' }}>
                            <h2 style={{ fontSize: 40 }}>Got any questions for us? Write us, we would love to help you out!</h2>
                        </Box>
                        <Container>
                            <Box sx={{ height: '400px', margin: '0 auto' }}>
                                <Stack direction='column' spacing={4}>
                                    <TextField id="outlined-basic" label="Name" variant="standard" />
                                    <TextField id="outlined-basic" label="E-mail" variant="standard" />
                                    <TextField id="outlined-multiline-flexible" placeholder="Write your message here." multiline maxRows={4} />
                                    <Box sx={{ height: 80, margin: '0 auto', width: 90, borderRadius: 40, backgroundColor: 'black', color: 'white', '&:hover': { cursor: 'pointer' } }}>
                                        <h2 style={{ textAlign: 'center' }}>Let's talk!</h2>
                                    </Box>
                                </Stack>
                            </Box>
                        </Container>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact