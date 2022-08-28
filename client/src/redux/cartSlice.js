import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct)
      }
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
          state.cartItems[itemIndex].cartQuantity += 1;
      }
    },

    lowerQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id) 
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        }
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    },


  },
})

export const { addToCart, removeFromCart, increaseQuantity, lowerQuantity } = cartSlice.actions

export default cartSlice.reducer