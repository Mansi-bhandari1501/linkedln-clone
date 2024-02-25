import axios from "axios";
import { COMMENT_TYPE } from "./commentType";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk(
    COMMENT_TYPE.GET_COMMENT,
    async (input) => {
        console.log(input)
        const res = await axios.get(`http://localhost:8080/comments/${input}`);
        console.log(res)
        const data =  res.data;
        console.log(data)
        return data;
    }
)
export const createComment = createAsyncThunk(
    COMMENT_TYPE.ADD_COMMENT,
    async (input) => {
        // console.log(postId)
        console.log('commentdata', input);
        // const {userId,body} = input;
        // console.log("COMMENTPOST",postId,userId,body)
        const res = await axios.post(`http://localhost:8080/comments`,input);
        console.log(res)
        const data = await res.data;
        return data;
    }
)