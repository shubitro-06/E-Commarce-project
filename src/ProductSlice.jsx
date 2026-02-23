import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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
        localStorage.setItem("cart",JSON.stringify(state.cart))
    },
     WishReducer: (state,action) => {
        state.wish = [...state.wish,action.payload]
    },
    RemoveReducer: (state,action) => {
        state.cart = state.cart.filter(item => item.id != action.payload)
        localStorage.setItem("cart",JSON.stringify(state.cart))
        // console.log(action.payload)
    },
    upReducer: (state,action) => {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item , quan : item.quan + 1} : item
      })
      localStorage.setItem("cart",JSON.stringify(state.cart))

    },
      downReducer: (state,action) => {
      state.cart = state.cart.map((item)=>{
        return item.id == action.payload ? {...item , quan : item.quan - 1} : item
      })
      localStorage.setItem("cart",JSON.stringify(state.cart))

    },
  },
})

// Action creators are generated for each case reducer function
export const { AllProducts,FilterReducer,CartReducer,WishReducer,RemoveReducer,upReducer,downReducer } = ProductSlice.actions

export default ProductSlice.reducer