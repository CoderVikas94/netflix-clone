import {createSlice } from '@reduxjs/toolkit'





export interface documentaryState {
    documentary: any,
    documentaryImageurl:any
}

const initialState: documentaryState = {
    documentary: [],
    documentaryImageurl:[]
}

export const documaentarySlice = createSlice({
  name: 'documentary',
  initialState,
  reducers: {
    setDocumentaryData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.documentary = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.documentaryImageurl = [...state.documentaryImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setDocumentaryData } = documaentarySlice.actions

export default documaentarySlice.reducer