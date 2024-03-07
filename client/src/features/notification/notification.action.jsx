import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { NOTIFICATION_TYPE } from "./notification.type";

export const fetchNotifications = createAsyncThunk(
    NOTIFICATION_TYPE.GET_NOTIFICATION,
    async ({receiverId}) => {
        console.log(receiverId)
        // console.log(token)
        const res = await axios.get(`http://localhost:4000`,receiverId)
        // {headers:{Authorization: token}});
        const data =  res.data;
        console.log("Data", data)
        return data;
    }
)