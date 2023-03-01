import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getData } from '../utils/api'

export interface ProductObj {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: Array<string>,
}

export interface DataState {
  data: Array<any>
  searchQuery: string
  isLoading: boolean
}

const initialState: DataState = {
  data: [],
  searchQuery: '',
  isLoading: false,
}

export const getInitialData = createAsyncThunk('getData', async () => {
  const data = await getData()
  return data
})

export const dataSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state: { data: any }, action: PayloadAction<Array<any>>) => {
      state.data = action.payload
    },
    setSearchQuery: (state: { searchQuery: string }, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setLoading: (state: { isLoading: boolean }, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder: { addCase: (arg0: any, arg1: { (state: any, action: any): any; (state: any, action: any): any }) => void }) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getInitialData.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
      return state
    })
  }
})

// Action creators are generated for each case reducer function
export const {
  setData,
  setSearchQuery,
  setLoading,
} = dataSlice.actions

export default dataSlice.reducer