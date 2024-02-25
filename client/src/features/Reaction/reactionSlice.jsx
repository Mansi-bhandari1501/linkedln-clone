import { createSlice} from "@reduxjs/toolkit"
import { getReactions, addReactions, getUserReactions } from "./Reaction.action"

const initialState = {
    reactions : {},
    isLoading : false,
    error: null,
}

export const reactionSlice = createSlice({
    name: 'reaction',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
     

        builder.addCase(getReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(getReactions.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.reactions[action.payload[0].postId] = action.payload;
            // state.comments[action.payload[0].postId] = action.payload;
        })
        builder.addCase(getReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.reactions = action.error;
        })
        builder.addCase(addReactions.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addReactions.fulfilled, (state, action)=> {
            state.isLoading = false;
         
        })
        builder.addCase(addReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default reactionSlice.reducer