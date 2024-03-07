import { createSlice } from "@reduxjs/toolkit"
import { addMessage, fetchMessage } from "./messageAction.jsx";

const initialState = {
    isLoading: true,
    error: null,
    
    messages: [],
}
const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
       newMessage(state, action) {
        console.log(action.payload)
        state.messages = [...state.messages, action.payload]
        // console.log(state.messages)
       }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state) => {
            console.log("pending")
            state.isLoading = true;
        })
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            // console.log("fullfilled")
            state.isLoading = false
            console.log("ACTION", action.payload)
            state.messages = action.payload;
            // state.toggle =
            console.log(state.messages)
            // state.requested = action.payload;
        })
        builder.addCase(fetchMessage.rejected, (state, action) => {
            console.log("rejected")
            state.isLoading = false
            state.error = action.error.message
            console.log(state.error)
        })


        // builder.addCase(addMessage.pending, (state) => {
        //     console.log("pending")
        //     state.isLoading = true;
        // })
        // builder.addCase(addMessage.fulfilled, (state, action) => {
        //     console.log("fullfilled")
        //     state.isLoading = false
        //     console.log("ACTION", action.payload)
        //     state.chats = action.payload;
        //     console.log(state.chats)
        //     // state.requested = action.payload;
        // })
        // builder.addCase(addMessage.rejected, (state, action) => {
        //     console.log("rejected")
        //     state.isLoading = false
        //     state.error = action.error.message
        //     console.log(state.error)
        // })

    },
});
export const { newMessage } = messageSlice.actions;
export default messageSlice.reducer;