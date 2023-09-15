'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReduc from "./reducers/loginReduc";

const rootReducer = combineReducers({
    login: loginReduc
})
export const store = configureStore({
    reducer: rootReducer
})