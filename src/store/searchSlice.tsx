import {createSlice } from '@reduxjs/toolkit'





export interface SearchState {
  search: any,
}

const initialState: SearchState = {
    search: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData: (state,action) => {
        state.search = action.payload.data.results
        console.log("state.search ",state.search )


            },
            setSearchEmpty: (state) => {
              state.search = []
              console.log("state.search ",state.search )
      
      
                  },
},
})





// Action creators are generated for each case reducer function
export const { setSearchData,setSearchEmpty } = searchSlice.actions

export default searchSlice.reducer