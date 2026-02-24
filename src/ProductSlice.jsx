import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wish: JSON.parse(localStorage.getItem("wish")) || [],
  subtotal: 0,
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
        localStorage.setItem("wish",JSON.stringify(state.wish))
    },
    RemoveReducer: (state,action) => {
        state.cart = state.cart.filter(item => item.id != action.payload)
        localStorage.setItem("cart",JSON.stringify(state.cart))
        // console.log(action.payload)
    },
    RemoveReducerWish: (state,action) => {
        state.wish = state.wish.filter(item => item.id != action.payload)
        localStorage.setItem("wish",JSON.stringify(state.wish))
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
    subtotalReducer: (state) => {
      state.subtotal = state.cart.reduce((current,item)=> current + (item.quan * item.price),0)
    }
  },
})

// Action creators are generated for each case reducer function
export const { AllProducts,FilterReducer,CartReducer,WishReducer,RemoveReducer,upReducer,downReducer,RemoveReducerWish,subtotalReducer } = ProductSlice.actions

export default ProductSlice.reducer