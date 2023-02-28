import {createSlice } from '@reduxjs/toolkit'





export interface MovieState {
  movieData: any,

}

const initialState: MovieState = {
    movieData: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieData: (state,action) => {
        state.movieData = action.payload
   },
   setTrendingMovieData:(state,action)=>{
    console.log("action",action.payload.data)
    state.movieData = action.payload.data
   }
},
})





// Action creators are generated for each case reducer function
export const { setMovieData,setTrendingMovieData } = movieSlice.actions

export default movieSlice.reducer