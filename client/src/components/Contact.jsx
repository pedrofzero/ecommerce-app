import React from 'react'
import { Grid, Stack, Box, Container, TextField } from '@mui/material'
import Form from '../components/Form'

const Contact = () => {
    return (
        <>
            <div className='flex flex-col max-w-3xl m-auto pt-4'>
                <h1 className='text-4xl text-center'>Got any questions or suggestions? Write us, we would love to hear from you.</h1>
                <Form />
            </div>
        </>
    )
}

export default Contact