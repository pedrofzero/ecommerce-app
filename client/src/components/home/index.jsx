import React from 'react'
import { Box, Card, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Header from '../../layout/header'

const Home = () => {

    const mockData = [
        { id: 1, name: 'T-shirt 1', price: 10 },
        { id: 2, name: 'T-shirt 2', price: 15 },
        { id: 3, name: 'T-shirt 3', price: 15 },
        { id: 4, name: 'T-shirt 4', price: 20 },
    ]

    return (
        <>
            <Header />
            <Container sx={{ pt: 4 }}>
                <Grid container>
                    <Grid item md={6}>
                        <Typography sx={{ fontSize: 82 }}>
                            A new shopping experience.
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Box
                            component='img'
                            sx={{
                                margin: 'auto',
                                height: 600,
                                width: 'auto'
                            }}
                            src='https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
            <Divider sx={{pt: 4, pb: 4}}/>

                {/* spacing */}
                <Box sx={{ my: 2 }} />

                <Typography variant='h1'>
                    Best Sellers
                </Typography>
                <Grid container spacing={2}>
                    {mockData.map((product, index) => {
                        return (
                            <Grid item lg={3} sm={4}>
                                <Link to={`/product/${product.id}`}>
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbhEh1UcaI0-who2Z2z5jevpCGT0Pc3tvY4ucC68Q4AuObWjKEPA4bwy-jzcD4Zy_kd6iKUVl9DxgF&usqp=CAc'
                                        />
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Home