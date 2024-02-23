import axios from "axios";
import { COMMENT_TYPE } from "./commentType";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk(
    COMMENT_TYPE.GET_COMMENT,
    async()=>{
        const res = await axios.get(`http://localhost:8080/comments`);
        const data = await res.data;
        return data;
    }
)
export const createComment = createAsyncThunk(
    COMMENT_TYPE.ADD_COMMENT,
    async()=>{
        const res = await axios.get(`http://localhost:8080/comments`);
        const data = await res.data;
        return data;
    }
)