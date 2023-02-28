import {createSlice } from '@reduxjs/toolkit'
import axios from 'axios';





export interface OriginalState {
  original: any,
}

const initialState: OriginalState = {
    original: [],
}

export const originalSlice = createSlice({
  name: 'netflixOriginal',
  initialState,
  reducers: {
    setOriginalData: (state,action) => {
        state.original = action.payload.data.results
                    
      },
},
})





// Action creators are generated for each case reducer function
export const { setOriginalData } = originalSlice.actions

export default originalSlice.reducer