import {createSlice } from '@reduxjs/toolkit'





export interface ComedyState {
  comedy: any,
  comedyImageurl:any
}

const initialState: ComedyState = {
    comedy: [],
    comedyImageurl:[]
}

export const comedySlice = createSlice({
  name: 'comedy',
  initialState,
  reducers: {
    setComedyData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.comedy = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.comedyImageurl = [...state.comedyImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setComedyData } = comedySlice.actions

export default comedySlice.reducer