import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MESSAGE_TYPE } from "./messageType.jsx";

export const fetchMessage= createAsyncThunk(
    MESSAGE_TYPE.GET_MESSAGE,
    async ({chatId,token}) => {
        // console.log(chatId)
        // console.log(token)
        const res = await axios.get(`http://localhost:8080/message/${chatId}`,
        {headers:{Authorization: token}});
        const data =  res.data;
        console.log("message", data)
        return data.message;
    }
)
// export const addMessage= createAsyncThunk(
//     MESSAGE_TYPE.ADD_MESSAGE,
//     async ({content, chatId, senderId,token}) => {
//         console.log(content, chatId, senderId)
//         console.log(token)
//         const res = await axios.post(`http://localhost:8080/message`,{content, chatId, senderId},
//         {headers:{Authorization: token}});
//         const data =  res.data;
//         console.log("chat", data.chat)
//         return data.chat;
//     }
// )