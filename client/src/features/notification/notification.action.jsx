import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { NOTIFICATION_TYPE } from "./notification.type";

export const fetchNotifications = createAsyncThunk(
    NOTIFICATION_TYPE.GET_NOTIFICATION,
    async ({receiverId}) => {
        console.log(receiverId)
        // console.log(token)
        const res = await axios.get(`http://localhost:4000`,{receiverId})
        // {headers:{Authorization: token}});
        const data =  res.data;
        console.log("Data", data)
        return data;
    }
)
export const createNotifications = createAsyncThunk(
    NOTIFICATION_TYPE.ADD_NOTIFICATION,
    async ({senderId, receiverId, type, content}) => {
        console.log(receiverId)
        // console.log(token)
        const res = await axios.post(`http://localhost:4000`,{senderId, receiverId, type, content})
        // {headers:{Authorization: token}});
        const data =  res.data;
        console.log("Data", data)
        return data;
    }
)