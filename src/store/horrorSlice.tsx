import {createSlice } from '@reduxjs/toolkit'





export interface HorrorState {
  horror: any,
}

const initialState: HorrorState = {
    horror: [],
}

export const horrorSlice = createSlice({
  name: 'horror',
  initialState,
  reducers: {
    setHorrorData: (state,action) => {
        state.horror = action.payload.data.results
        
    },
},
})





// Action creators are generated for each case reducer function
export const { setHorrorData } = horrorSlice.actions

export default horrorSlice.reducer