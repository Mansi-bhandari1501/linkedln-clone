import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { CONNECTION_TYPE } from "./connectionType";

export const fetchConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_PENDING_CONNECTION,
    async ({userId,token}) => {
        console.log(userId)
        console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/${userId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data.connection)
        return data;
    }
)
export const fetchPendingConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_PENDING_CONNECTION,
    async ({userId,token}) => {
        console.log(userId)
        console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/pending/${userId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data.connection)
        return data;
    }
)
export const rejectConnection = createAsyncThunk(
    CONNECTION_TYPE.REJECT_CONNECTION,
    async ({senderId,token}) => {
       
        const res = await axios.get(`http://localhost:8080/connections/${senderId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data.connection)
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
export const addConnection = createAsyncThunk(
    CONNECTION_TYPE.ADD_CONNECTION,
    async (receiverId,senderId,token) => {
        console.log(receiverId,senderId,token)
        const res = await axios.post(`http://localhost:8080/connections`,receiverId,senderId,
        {headers:{Authorization: token}}
        );
        const data =  res.data;
        console.log(data)
        return data;
    }
)