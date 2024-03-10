import { createSlice} from "@reduxjs/toolkit";
import { acceptConnection, createConnections, fetchActiveConnection, fetchPendingConnection, fetchReceivedConnection, rejectConnection } from "./connectionAction";
// import Received from './../../components/Invitation/received';




const initialState ={
    connections:[],
    isLoading:true,
    error:null,
    requested:[],
    received:[],
    active:[]
  
}
export const connectionSlice = createSlice({
    name:'connection',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // fetchReceivedConnection
        
        builder.addCase(fetchReceivedConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchReceivedConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload.connection)
            state.received=action.payload.connection;
            // state.requested = action.payload;
        })
        builder.addCase(fetchReceivedConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })


        builder.addCase(createConnections.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(createConnections.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload)
            state.requested = action.payload
        })
      
        builder.addCase(createConnections.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })


        builder.addCase(fetchPendingConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPendingConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.connections = action.payload;
            console.log(state.connections)

        })
        builder.addCase(fetchPendingConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        //fetchActiveConnection
        builder.addCase(fetchActiveConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchActiveConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log(action.payload.connection)
            state.active=action.payload.connection;
            console.log(state.connections)
        })
        builder.addCase(fetchActiveConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        //rejectConnection
        builder.addCase(rejectConnection.pending,(state)=>{
            state.isLoading=true;
            // console.log(state)
        })
        builder.addCase(rejectConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log(action.payload.connection)
            console.log(action.payload.connection.status)
            if(action.payload.connection.status === 'rejected'){
                const newReq = state.connections.filter((item) => {
                     return item.sender !== action.payload.connection.sender
                })
                state.requested = newReq
                console.log("NEWREQQQ",newReq)
            }
            // if(action.payload.connection.status === 'rejected'){
            //     const newReq = state.connections.filter((item) => {
            //          return item.sender !== action.payload.connection.sender
            //     })
            //     state.requested = newReq
            //     console.log(newReq)
            // }

        })
        builder.addCase(rejectConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        
        //acceptConnection
        builder.addCase(acceptConnection.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(acceptConnection.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload)
            state.received= state.received.filter((a) => a._id=== action.payload._id) 
            // console.log( state.connections)
        })
        builder.addCase(acceptConnection.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
            console.log("error",state.error)
        })
      
    },
});
export default connectionSlice.reducer;