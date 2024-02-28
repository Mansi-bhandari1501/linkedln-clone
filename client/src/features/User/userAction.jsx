import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from '../../service/user.service';
import { ACTION_TYPE } from "./actionType.jsx";
import axios from "axios";

export const registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(email,password)
      const res = await axios.post(`http://localhost:8080/users/register`,{email,password},config)

      // const res = await userRegister({email,password},config)
      console.log(res)
      return res
    } 
    catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  ACTION_TYPE.SIGN_IN,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("action", email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await userLogin({email,password},config);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
// export const userDetails = createAsyncThunk(
//   ACTION_TYPE.USER_DETAILS,
//   async ({input,userId}, { rejectWithValue }) => {
//     try {
//       console.log("action", input,userId);
     
//       const res = await axios.post(`http://localhost:8080/users/${userId}`, input)      
//     return res;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
export const fetchUsers = createAsyncThunk(
  ACTION_TYPE.GET_USER,
  async({userId,token},{rejectWithValue})=>{
      console.log(token)
      console.log(userId)
      const res = await axios.get(`http://localhost:8080/users/${userId}`,
      {headers:{Authorization: token}}
      );
      // console.log(res);
      const data = await res.data;
      return data;
  }
)
