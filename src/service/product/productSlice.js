import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../dummy/data'

export const productrSlice = createSlice({
  name: 'product',
  initialState: {
    products:products
  },
  reducers: {
   setProduct:(state,action)=>{
    state.products = action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = productrSlice.actions

export default productrSlice.reducer