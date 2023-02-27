import {createSlice } from '@reduxjs/toolkit'
import axios from 'axios';





export interface TrensdingState {
  trending: any,
  trendingImageurl:any
}

const initialState: TrensdingState = {
    trending: [],
    trendingImageurl:[]
}

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    setTrendingData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.trending = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.trendingImageurl = [...state.trendingImageurl,`${urlImage}${item.poster_path}` ]

        })
       
   
    },
},
})





// Action creators are generated for each case reducer function
export const { setTrendingData } = trendingSlice.actions

export default trendingSlice.reducer