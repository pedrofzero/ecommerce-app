import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


// change this all to only fetching all products. eventually we just filter everything out. 
// front page is literally fetching 5 products filtered by gender. this will save up network time. 

export const allProductsFetch = createAsyncThunk(
    "products/all", async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_PATH}/getAllProducts`)
        return response?.data
    }
)

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


