import {createSlice } from '@reduxjs/toolkit'





export interface documentaryState {
    documentary: any,
}

const initialState: documentaryState = {
    documentary: [],
}

export const documaentarySlice = createSlice({
  name: 'documentary',
  initialState,
  reducers: {
    setDocumentaryData: (state,action) => {
        state.documentary = action.payload.data.results
       
    },
},
})





// Action creators are generated for each case reducer function
export const { setDocumentaryData } = documaentarySlice.actions

export default documaentarySlice.reducer