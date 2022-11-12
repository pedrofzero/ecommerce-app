import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const menProducts = createAsyncThunk(
    "products/men", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getProducts`)
        return response?.data
    }
)

export const womenProducts = createAsyncThunk(
    "products/women", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getProducts`)
        return response?.data
    }
)

export const bestSellersFetch = createAsyncThunk(
    "products/bestSellersFetch", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getBestSellers`)
        return response?.data
    }
)

export const singleProductFetch = createAsyncThunk(
    "products/singleProductFetch", async (id) => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getProduct?id=${id}`)
        return response?.data
    }
)


