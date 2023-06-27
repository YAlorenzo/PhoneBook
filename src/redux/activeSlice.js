import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: 'active', 

    initialState: false,

    reducers: {
        activeAction(state, action) {
            state = action.payload
            return state
            
        }
    }
})

export const { activeAction } = activeSlice.actions; 
export const activeReducer = activeSlice.reducer