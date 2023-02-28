import {createSlice } from '@reduxjs/toolkit'





export interface ActionState {
  action: any,
}

const initialState: ActionState = {
    action: [],
}

export const actionSlice = createSlice({
  name: 'top-rated',
  initialState,
  reducers: {
    setActionData: (state,action) => {
        state.action = action.payload.data.results
         },
},
})





// Action creators are generated for each case reducer function
export const { setActionData } = actionSlice.actions

export default actionSlice.reducer