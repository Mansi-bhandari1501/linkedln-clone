import { createSlice} from "@reduxjs/toolkit"
import { getReactions, addReaction, getUserReactions } from "./reactionAction"

const initialState = {
    reactions : [],
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
            console.log("hhhhhh",action.payload)
            // state.reactions[action.payload[0].postId] = action.payload;
            state.reactions = action.payload
        })
        builder.addCase(getReactions.rejected, (state, action)=> {
            state.isLoading = false;
            state.reactions = action.error;
        })


        // builder.addCase(getReactions.pending, (state, action)=> {
        //     state.isLoading = true;
        // })
        // builder.addCase(getReactions.fulfilled, (state, action)=> {
        //     state.isLoading = false;
        //     // state.reactions[action.payload[0].postId] = action.payload;
        //     state.reactions = action.payload
        // })
        // builder.addCase(getReactions.rejected, (state, action)=> {
        //     state.isLoading = false;
        //     state.reactions = action.error;
        // })


        builder.addCase(addReaction.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(addReaction.fulfilled, (state, action)=> {
            console.log( state.reactions)
            console.log(action.payload)
            state.isLoading = false;
            state.reactions = action.payload
         
        })
        builder.addCase(addReaction.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default reactionSlice.reducer