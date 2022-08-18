import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const productsFetch = createAsyncThunk(
    "products/productsFetch", async () => {
        const response = await axios.get("http://45.136.70.211:3001/getProducts")
        return response?.data
    }
)

export const singleProductFetch = createAsyncThunk(
    "products/singleProductFetch", async (id) => {
        const response = await axios.get(`http://45.136.70.211:3001/getProduct?id=${id}`)
        return response?.data
    }
)

export const bestSellersFetch = createAsyncThunk(
    "products/bestSellersFetch", async () => {
        const response = await axios.get("http://45.136.70.211:3001/getBestSellers")
        return response?.data
    }
)
