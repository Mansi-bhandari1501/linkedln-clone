import { createSlice } from "@reduxjs/toolkit"
import { fetchChats } from "./chatAction.jsx";

const initialState = {
    chats: [],
    isLoading: true,
    error: null,

}
const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChats.pending,(state)=>{
            console.log("pending")
            state.isLoading=true;
        })
        builder.addCase(fetchChats.fulfilled,(state,action)=>{
            console.log("fullfilled")
            state.isLoading=false
            console.log("ACTION",action.payload)
            state.chats=action.payload;
            console.log(state.chats)
            // state.requested = action.payload;
        })
        builder.addCase(fetchChats.rejected,(state,action)=>{
            console.log("rejected")
            state.isLoading=false
            state.error= action.error.message
            console.log(state.error)
        })

    },
});

export default chatSlice.reducer;