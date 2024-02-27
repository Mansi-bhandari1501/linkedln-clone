import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { CONNECTION_TYPE } from "./connectionType";

export const fetchConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_PENDING_CONNECTION,
    async ({userId,token}) => {
        console.log(userId)
        console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/pending/${userId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data)
        return data;
    }
)
export const fetchActiveConnection = createAsyncThunk(
    CONNECTION_TYPE.GET_ACTIVE_CONNECTION,
    async ({userId,token}) => {
        console.log(userId)
        console.log(token)
        const res = await axios.get(`http://localhost:8080/connections/active/${userId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("connectionData",data)
        return data;
    }
)
export const createConnection = createAsyncThunk(
    CONNECTION_TYPE.ADD_CONNECTION,
    async ({input}) => {
        console.log(input)
        const res = await axios.get(`http://localhost:8080/connections/${input}`,
        {headers:{Authorization: token}}
        );
        
        const data =  res.data;
        console.log(data)
        return data;
    }
)