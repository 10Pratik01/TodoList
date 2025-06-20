import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../function/todoSlice"

export const store = configureStore({
    reducer:todoReducer
    
})