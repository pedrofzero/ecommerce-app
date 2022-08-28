import { productsFetch, bestSellersFetch, singleProductFetch, productsFetchByFilter } from './api'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  currentProduct: [],
  bestSellers: [],
  status: null,
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending] : (state, action) => {
        state.status = "pending"
    },
    [productsFetch.fulfilled] : (state, action) => {
        state.status = "success"
        state.items = action.payload
    },
    [productsFetch.rejected] : (state, action) => {
        state.status = "rejected"
    },

    [productsFetchByFilter.pending] : (state, action) => {
        state.status = "pending"
    },
    [productsFetchByFilter.fulfilled] : (state, action) => {
        state.status = "success"
        state.items = action.payload
    },
    [productsFetchByFilter.rejected] : (state, action) => {
        state.status = "rejected"
    },

    [singleProductFetch.pending] : (state, action) => {
        state.status = "pending"
    },
    [singleProductFetch.fulfilled] : (state, action) => {
        state.status = "success"
        state.currentProduct = action.payload
    },
    [singleProductFetch.rejected] : (state, action) => {
        state.status = "rejected"
    },

    [bestSellersFetch.pending] : (state, action) => {
        state.status = "pending"
    },
    [bestSellersFetch.fulfilled] : (state, action) => {
        state.status = "success"
        state.bestSellers = action.payload
    },
    [bestSellersFetch.rejected] : (state, action) => {
        state.status = "rejected"
    },

  }
})

export default productsSlice.reducer