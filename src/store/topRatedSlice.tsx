import {createSlice } from '@reduxjs/toolkit'





export interface TopRatedState {
  topRated: any,
  topRatedImageurl:any
}

const initialState: TopRatedState = {
    topRated: [],
    topRatedImageurl:[]
}

export const topRatedSlice = createSlice({
  name: 'top-rated',
  initialState,
  reducers: {
    setTopRatedData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.topRated = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.topRatedImageurl = [...state.topRatedImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setTopRatedData } = topRatedSlice.actions

export default topRatedSlice.reducer