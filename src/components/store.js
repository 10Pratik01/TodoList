import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../function/todoClice"

export const store = configureStore({
    reducer:todoReducer
    
})