import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchReactions, postReactions, userReaction } from "./Reaction.type"

export const getUserReactions = createAsyncThunk(
    userReaction,
    async(input)=> {
        try {
            console.log(" get user reactions - ")
            const response = await axios.get(`http://localhost:8080/reactions/${input}`)
            console.log(response);
            const data = await response.data
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const getReactions = createAsyncThunk(
    fetchReactions,
    async(input)=> {
        try {
            const response = await axios.get(`http://localhost:8080/reactions${input}`,)
            const data = await response.data
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const addReactions = createAsyncThunk(
    postReactions,
    async(input)=> {
        try {
            const response = await axios.post('http://localhost:8080/reactions', input)
            const data = await response.data
            return data;
        } catch (error) {
            throw error;
        }
    }
)