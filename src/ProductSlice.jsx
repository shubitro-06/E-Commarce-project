import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: [],
  wish: [],
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     AllProducts: (state,action) => {
        state.value = action.payload
    },
     FilterReducer: (state,action) => {
        state.value = action.payload
    },
     CartReducer: (state,action) => {
        state.cart = [...state.cart,action.payload]
    },
     WishReducer: (state,action) => {
        state.wish = [...state.wish,action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { AllProducts,FilterReducer,CartReducer,WishReducer } = ProductSlice.actions

export default ProductSlice.reducer