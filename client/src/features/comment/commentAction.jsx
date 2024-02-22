import axios from "axios";
import { Type } from "./commentType";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk(
    'comment/fetchComment',
    async()=>{
        const res = await axios.get(`http://localhost:8080/comments`);
        const data = await res.data;
        return data;
    }
)