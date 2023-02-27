import {createSlice } from '@reduxjs/toolkit'





export interface ActionState {
  action: any,
  actionImageurl:any
}

const initialState: ActionState = {
    action: [],
    actionImageurl:[]
}

export const actionSlice = createSlice({
  name: 'top-rated',
  initialState,
  reducers: {
    setActionData: (state,action) => {
        const urlImage = "https://image.tmdb.org/t/p/original/"
        state.action = action.payload.data.results
        action.payload.data.results.map((item:any)=>{
            state.actionImageurl = [...state.actionImageurl,`${urlImage}${item.poster_path}` ]

        })
    },
},
})





// Action creators are generated for each case reducer function
export const { setActionData } = actionSlice.actions

export default actionSlice.reducer