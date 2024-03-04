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
    async({token,page})=>{
        // console.log(token)
        console.log("FETCHPOSTSSS",page)

        let postUrl= `http://localhost:8080/posts?page=${page}`
        const res = await axios.get(postUrl,{headers:{Authorization: token}});
        const data = await res.data;
        console.log(data,page);
        return data;
    }
)
export const createPost = createAsyncThunk(
    'post/getPost',
    async({formData, token}) => {
        try{

            console.log("token",formData);
            const res = await axios.post("http://localhost:8080/posts", formData ,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': token,
                }
            }) 
            console.log(res)
            return res
        }catch(error){
            throw error;
        }
    })
        
export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // fetchPost
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error=null
            console.log(action.payload)
            console.log( state.contents)
            // const prevPosts =state.contents
            // console.log(prevPosts)
            state.contents=action.payload.posts;
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        // createPost
        builder.addCase(createPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=null
            state.contents.push(action.payload.data.post);
        })
        builder.addCase(createPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
      
    },
});
export default postSlice.reducer;