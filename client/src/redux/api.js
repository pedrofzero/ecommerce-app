import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const productsFetch = createAsyncThunk(
    "products/productsFetch", async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL_PATH}/getProducts`)
        return response?.data
    }
)

export const productsFetchByFilter = createAsyncThunk(
    "products/productsFetchByFilter", async (type) => {
        const response = await axios.get(`${process.env.REACT_APP_URL_PATH}/getProductsByType?type=${type}`)
        return response?.data
    }
)

export const singleProductFetch = createAsyncThunk(
    "products/singleProductFetch", async (id) => {
        const response = await axios.get(`${process.env.REACT_APP_URL_PATH}/getProduct?id=${id}`)
        return response?.data
    }
)

export const bestSellersFetch = createAsyncThunk(
    "products/bestSellersFetch", async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL_PATH}/getBestSellers`)
        return response?.data
    }
)
