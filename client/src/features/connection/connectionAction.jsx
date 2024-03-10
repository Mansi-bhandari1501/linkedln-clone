import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { CONNECTION_TYPE } from "./connectionType";

export const fetchReceivedConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_RECEIVED_CONNECTION,
    async ({receiverId,token}) => {
        // console.log(receiverId)
        // console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/${receiverId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData", data.connection)
        return data;
    }
)
export const fetchPendingConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_PENDING_CONNECTION,
    async ({senderId,token}) => {
        // console.log(senderId)
        // console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/pending/${senderId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data)
        return data;
    }
)
export const rejectConnection = createAsyncThunk(
    CONNECTION_TYPE.REJECT_CONNECTION,
    async ({senderId, receiverId, status,token}) => {
        console.log({senderId, receiverId, status})
        const res = await axios.put(`http://localhost:8080/connections/remove/`,{senderId, receiverId, status},
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log(data)
        console.log("connectionData😬😬😬😬",data.connection)
        return data;
    }
)
export const fetchActiveConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_ACTIVE_CONNECTION,
    async ({userId,token}) => {
       
        const res = await axios.get(`http://localhost:8080/connections/active/${userId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data)
        return data;
    }
)
export const acceptConnection = createAsyncThunk(
    CONNECTION_TYPE.ADD_CONNECTION,
    async ({senderId, receiverId, status,token}) => {
        // console.log({senderId, receiverId, status})
        const res = await axios.patch(`http://localhost:8080/connections/`,{senderId, receiverId, status},
        {headers:{Authorization: token}}
        );
        console.log(res)
        const data =  res.data.connection;
        console.log("data",data)
        return data;
    }

)
export const createConnections = createAsyncThunk(
    CONNECTION_TYPE.CREATE_CONNECTION,
    async ({senderId, receiverId,token}) => {
        // console.log({senderId, receiverId})
        const res = await axios.post(`http://localhost:8080/connections/`,{senderId, receiverId},
        {headers:{Authorization: token}}
        );
        console.log(res)
        const data =  res.data.connection;
        console.log(data)
        return data;
    }

)