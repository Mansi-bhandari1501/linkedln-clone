import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    contents:[],
    isLoading:true,
    error:null
}
// let webApiUrl = 'example.com/getStuff';
// let tokenStr = 'xxyyzz';
// axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });
export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async(token)=>{
        console.log(token)
        let postUrl= "http://localhost:8080/posts"
        // let tokenStr =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyZTc4OWMyOTg0OTQ4OGE2ZjIzNzMiLCJpYXQiOjE3MDgzMjIzNTcsImV4cCI6MTcwODkyNzE1N30.b5DwpYFSCh6--xtwKzlw-zMH-utVTDA8QgkFW31i7vk";
        const res = await axios.get(postUrl,{headers:{Authorization: token}});
        console.log(res);
        const data = await res.data;
        return data;
    }
)
export const createPost = createAsyncThunk(
    'post/getPost',
    async(input) =>{
        console.log(input)
        const res = await axios.post("http://localhost:8080/posts",{title,body})
        console.log(res);
    }
)
export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        builder.addCase(createPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(createPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
      
    },
});
export default postSlice.reducer;