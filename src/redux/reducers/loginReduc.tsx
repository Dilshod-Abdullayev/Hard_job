'use client'
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'login',
    initialState: {
        value: true
    },
    reducers: {
        setState(state, action) {
            state.value=!state.value
        }
    }
})
export const { setState } = profileSlice.actions
export default profileSlice.reducer