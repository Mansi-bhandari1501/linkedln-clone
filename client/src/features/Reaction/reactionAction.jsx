import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchReactions, postReactions, userReaction } from "./reactionType"

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
    async(postId)=> {
        try {
            console.log(postId)
            // const postId = "65df4e590653dd091872e5c8"
            const response = await axios.get(`http://localhost:8080/reactions/${postId}`,)
            const data = await response.data
            console.log("response😬😬",response)
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const addReaction = createAsyncThunk(
    postReactions,
    async(obj)=> {
        try {
            console.log(obj)
            const response = await axios.post(`http://localhost:8080/reactions/`,obj)
            const data = await response.data
            console.log(data)
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const removeReaction = createAsyncThunk(
    postReactions,
    async(obj)=> {
        try {
            console.log(obj)
            const response = await axios.post(`http://localhost:8080/reactions/`,obj)
            const data = await response.data
            console.log(data)
            return data;
        } catch (error) {
            throw error;
        }
    }
)