import React, { Suspense } from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import AppLayout from '../layout/appLayout'
import Header from '../layout/header'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import Home from '../pages/home'
import SingleProduct from '../pages/product'
import Store from '../pages/store'
import Success from '../pages/success'

const Router = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/store" element={<Store />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route exact path="/product/:id" element={<SingleProduct />} />
            </>
        )
    )
    return (
        <Suspense fallback={<div className='loading' />}>
            <AppLayout>
                <RouterProvider router={router} />
            </AppLayout>
        </Suspense>
    )
}

export default Router