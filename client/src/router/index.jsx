import React, { Suspense } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

import Home from '../components/home'
import Products from '../components/products'
import AppLayout from '../layout/appLayout'
import SingleProduct from '../components/product'
import Category from '../components/products/category'
import Cart from '../components/cart'

const Router = () => {
    return (
        <Suspense fallback={<div className='loading' />}>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route index element={<Navigate to="/home" />} />
                        <Route exact path="/home">
                            <Route index element={<Home />} />
                        </Route>
                        <Route exact path="/cart">
                            <Route index element={<Cart />} />
                        </Route>
                        <Route exact path="/collections/all">
                            <Route index element={<Products />} />
                        </Route>
                        <Route exact path="/collections/:type">
                            <Route index element={<Category />} />
                        </Route>
                        <Route exact path="/product/:id">
                            <Route index element={<SingleProduct />} />
                        </Route>
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </Suspense>
    )
}

export default Router