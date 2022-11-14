import { menProductsFetch, womenProductsFetch, bestSellersFetch, singleProductFetch } from './api'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bestSellers: [],
    menProducts: [],
    womenProducts: [],
    currentProduct: [],
    status: null,
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [womenProductsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [womenProductsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.womenProducts = action.payload
        },
        [womenProductsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },

        [menProductsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [menProductsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.menProducts = action.payload
        },
        [menProductsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },

        [singleProductFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [singleProductFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.currentProduct = action.payload
        },
        [singleProductFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },

        [bestSellersFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [bestSellersFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.bestSellers = action.payload
        },
        [bestSellersFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },

    }
})

export default productsSlice.reducer