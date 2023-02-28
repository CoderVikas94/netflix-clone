import {createSlice } from '@reduxjs/toolkit'





export interface TopRatedState {
  topRated: any,
}

const initialState: TopRatedState = {
    topRated: [],
}

export const topRatedSlice = createSlice({
  name: 'top-rated',
  initialState,
  reducers: {
    setTopRatedData: (state,action) => {
        state.topRated = action.payload.data.results
    },
},
})





// Action creators are generated for each case reducer function
export const { setTopRatedData } = topRatedSlice.actions

export default topRatedSlice.reducer