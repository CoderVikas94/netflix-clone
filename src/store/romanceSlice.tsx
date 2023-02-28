import {createSlice } from '@reduxjs/toolkit'





export interface RoamanceState {
  romance: any,
}

const initialState: RoamanceState = {
    romance: [],
}

export const romanceSlice = createSlice({
  name: 'romance',
  initialState,
  reducers: {
    setRomanceData: (state,action) => {
        state.romance = action.payload.data.results
            },
},
})





// Action creators are generated for each case reducer function
export const { setRomanceData } = romanceSlice.actions

export default romanceSlice.reducer