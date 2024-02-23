import { createSlice} from "@reduxjs/toolkit";
// import axios from "axios";
import { createComment, fetchComment } from "./commentAction";

const initialState ={
    comments:[],
    isLoading:true,
    error:null
}

// export const fetchComment = createAsyncThunk(
//     Type,
//     async()=>{
//         const res = await axios.get(`http://localhost:8080/comments`);
//         const data = await res.data;
//         return data;
//     }
// )
export const commentSlice = createSlice({
    name:'comment',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchComment.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchComment.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(fetchComment.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        builder.addCase(createComment.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(createComment.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(createComment.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
    },
});
export default commentSlice.reducer;