import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/slices/postSlice";
import commentSlice from "../features/comment/commentSlice";
import userSlice from "../features/User/userSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        post:postSlice,
        comments:commentSlice
    },
})
console.log(store.getState())