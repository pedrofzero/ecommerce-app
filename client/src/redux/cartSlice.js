import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.total += state.cartItems[itemIndex].price
        state.quantity += 1
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItems.push(product)
        state.total += product.price
        state.quantity += 1
      }
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.total += state.cartItems[itemIndex].price
        state.quantity += 1
      }
    },

    lowerQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
          state.quantity -= 1
          state.total -= state.cartItems[itemIndex].price
        }
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.total -= state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price
        state.quantity -= state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },


  },
})

export const { addToCart, removeFromCart, increaseQuantity, lowerQuantity } = cartSlice.actions

export default cartSlice.reducer