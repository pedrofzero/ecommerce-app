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
      // console.log(state.cartItems.findIndex( (item) => item.id === 1));
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      // console.log(itemIndex)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct)
      }
    },

    // well, technically only lower the quantity for now
    removeFromCart: (state, action) => {
      // console.log(state.cartItems.findIndex( (item) => item.id === 1));
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      // console.log(itemIndex)
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity !== 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1)
        }
      }
    },
    
    // ill fix names later on, lol.
    actuallyRemoveFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    }
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer