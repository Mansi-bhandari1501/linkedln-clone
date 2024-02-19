import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../slices/postSlice";
// import commentSlice from "../slices/commentSlice";

export const store = configureStore({
    reducer:{
        post:postSlice,
    },
})
console.log(store.getState())