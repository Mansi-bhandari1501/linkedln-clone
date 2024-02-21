import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/slices/postSlice";
import commentSlice from "../features/comment/commentSlice";

export const store = configureStore({
    reducer:{
        post:postSlice,
        comments:commentSlice
    },
})
console.log(store.getState())