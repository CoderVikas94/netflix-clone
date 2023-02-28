import {createSlice } from '@reduxjs/toolkit'





export interface ComedyState {
  comedy: any,
}

const initialState: ComedyState = {
    comedy: [],
}

export const comedySlice = createSlice({
  name: 'comedy',
  initialState,
  reducers: {
    setComedyData: (state,action) => {
        state.comedy = action.payload.data.results
      
    },
},
})





// Action creators are generated for each case reducer function
export const { setComedyData } = comedySlice.actions

export default comedySlice.reducer