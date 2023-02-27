import {createSlice } from '@reduxjs/toolkit'





export interface HorrorState {
  horror: any,
  horrorImageurl:any
}

const initialState: HorrorState = {
    horror: [],
    horrorImageurl:[]
}

export const horrorSlice = createSlice({
  name: 'horror',
  initialState,
  reducers: {
    setHorrorData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.horror = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.horrorImageurl = [...state.horrorImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setHorrorData } = horrorSlice.actions

export default horrorSlice.reducer