import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const menProductsFetch = createAsyncThunk(
    "products/men", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getMenProducts`)
        return response?.data
    }
)

export const womenProductsFetch = createAsyncThunk(
    "products/women", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getWomenProducts`)
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
        const response = await axios.post(`${import.meta.env.VITE_URL_PATH}/getProduct`, {
                id
        })
        return response?.data
    }
)


