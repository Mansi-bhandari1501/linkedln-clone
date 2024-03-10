import { createSlice } from "@reduxjs/toolkit";
import { fetchNotifications } from "./notification.action";

const initialState ={
    notifications:[],
    isLoading:true,
    error:null,
    requested:[],
    received:[],
    active:[]
  
}
export const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // fetchReceivedConnection
        
        builder.addCase(fetchNotifications.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchNotifications.fulfilled,(state,action)=>{
            state.isLoading=false
            console.log("ACTION",action.payload)
            state.notifications=action.payload;
            // state.requested = action.payload;
        })
        builder.addCase(fetchNotifications.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
      
    },
});
export default notificationSlice.reducer;