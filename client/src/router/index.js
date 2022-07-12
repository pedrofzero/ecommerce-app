import React, { Suspense } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/login'
import Products from '../components/products'
import SingleProduct from '../components/products/product'
import Register from '../components/register'

const Router = () => {
    return (
        <Suspense fallback={<div className='loading'/>}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to="/home" />} />
                <Route exact path="/home">
                    <Route index element={<Home />} />
                </Route>
                <Route exact path="/login">
                    <Route index element={<Login />} />
                </Route>
                <Route exact path="/register">
                    <Route index element={<Register />} />
                </Route>
                <Route exact path="/product/:id">
                    <Route index element={<SingleProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </Suspense>
    )
}

export default Router