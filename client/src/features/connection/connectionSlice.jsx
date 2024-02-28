import { createSlice} from "@reduxjs/toolkit";
import { addConnection, fetchActiveConnection, fetchConnection, rejectConnection } from "./connectionAction";



const initialState ={
    connections:[],
    isLoading:true,
    error:null,
    requested:[],
  
}
export const connectionSlice = createSlice({
    name:'connection',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // fetchConnection
        builder.addCase(fetchConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload.connection)
            state.connections=action.payload.connection;
            // state.requested = action.payload;
        })
        builder.addCase(fetchConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        //fetchActiveConnection
        builder.addCase(fetchActiveConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchActiveConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log(action.payload)
            state.connections=action.payload.connection;
        })
        builder.addCase(fetchActiveConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        //rejectConnection
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
        
        //addConnection
        builder.addCase(addConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(addConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload)
            // state.connections=action.payload
        })
        builder.addCase(addConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
            console.log("error",state.error)
        })
      
    },
});
export default connectionSlice.reducer;