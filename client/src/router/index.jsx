import React, { Suspense } from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import AppLayout from '../layout/appLayout'
import Cart from '../pages/cart'
import Home from '../pages/home'
import SingleProduct from '../pages/product'
import Products from '../pages/products'
import Category from '../pages/products/category'

const Router = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
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