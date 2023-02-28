import {createSlice } from '@reduxjs/toolkit'





export interface TrensdingState {
  trending: any,
}

const initialState: TrensdingState = {
    trending: [],
}

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    setTrendingData: (state,action) => {
        state.trending = action.payload.data.results
     
    },
},
})





// Action creators are generated for each case reducer function
export const { setTrendingData } = trendingSlice.actions

export default trendingSlice.reducer