import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./userSlice"
export const Store = configureStore({
    reducer:{
        user:useReducer
    }
});

