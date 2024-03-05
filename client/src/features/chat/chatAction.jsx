import { createAsyncThunk } from "@reduxjs/toolkit";
import { CHAT_TYPE } from './chatType.jsx';
import axios from "axios";

export const fetchChats= createAsyncThunk(
    CHAT_TYPE.GET_CHAT,
    async ({logId,token}) => {
        console.log(logId)
        console.log(token)
        const res = await axios.get(`http://localhost:8080/chats/${logId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("chat", data)
        return data.chat;
    }
)
export const addChats= createAsyncThunk(
    CHAT_TYPE.ADD_CHAT,
    async ({userId, logId,token}) => {
        console.log(userId,logId)
        console.log(token)
        const res = await axios.post(`http://localhost:8080/chats/`,{userId, logId},
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("chat", data)
        return data.chat;
    }
)