import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    contents:[],
    isLoading:true,
    error:null
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async()=>{
        const res = await axios(`http://localhost:8080/comments`);
        const data = await res.data;
        return data;
    }
)
export const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchContent.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchContent.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(fetchContent.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
    },
});
export default contentSlice.reducer;