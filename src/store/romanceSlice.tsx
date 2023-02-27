import {createSlice } from '@reduxjs/toolkit'





export interface RoamanceState {
  romance: any,
  romanceImageurl:any
}

const initialState: RoamanceState = {
    romance: [],
    romanceImageurl:[]
}

export const romanceSlice = createSlice({
  name: 'romance',
  initialState,
  reducers: {
    setRomanceData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.romance = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.romanceImageurl = [...state.romanceImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setRomanceData } = romanceSlice.actions

export default romanceSlice.reducer