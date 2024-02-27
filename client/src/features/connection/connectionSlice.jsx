import { createSlice} from "@reduxjs/toolkit";
import { addConnection, createConnection, fetchActiveConnection, fetchConnection, rejectConnection } from "./connectionAction";
// import axios from "axios";


const initialState ={
    connections:{},
    isLoading:true,
    error:null
}
export const connectionSlice = createSlice({
    name:'connection',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.connections=action.payload.connection;
        })
        builder.addCase(fetchConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        builder.addCase(fetchActiveConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchActiveConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.connections=action.payload.connection;
        })
        builder.addCase(fetchActiveConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        builder.addCase(rejectConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(rejectConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.connections=action.payload.connection;
        })
        builder.addCase(rejectConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        
        builder.addCase(addConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(addConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.connections=action.payload
        })
        builder.addCase(addConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
      
    },
});
export default connectionSlice.reducer;