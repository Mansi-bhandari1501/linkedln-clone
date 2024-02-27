import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/slices/postSlice";
import commentSlice from "../features/comment/commentSlice";
import userSlice from "../features/User/userSlice";
import connectionSlice from "../features/connection/connectionSlice";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
}
const rootreducer = combineReducers({
    comments: commentSlice,
    user: userSlice,
    post: postSlice,
    connection: connectionSlice,
})
const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store)
// export const store = configureStore({
//     reducer:{
//         comments:commentSlice,
//         user: userSlice,
//         post:postSlice,
//     },
// })
// console.log(    store.getState())