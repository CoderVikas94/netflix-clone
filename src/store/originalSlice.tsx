import {createSlice } from '@reduxjs/toolkit'
import axios from 'axios';





export interface OriginalState {
  original: any,
  originalImageurl:any
}

const initialState: OriginalState = {
    original: [],
    originalImageurl:[]
}

export const originalSlice = createSlice({
  name: 'netflixOriginal',
  initialState,
  reducers: {
    setOriginalData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.original = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.originalImageurl = [...state.originalImageurl,`${urlImage}${item.poster_path}` ]

        })
        console.log(" state.originalImage", state.originalImageurl)
        // state.originalImage = action.payload.data.results.poster_path
   
    },
},
})





// Action creators are generated for each case reducer function
export const { setOriginalData } = originalSlice.actions

export default originalSlice.reducer