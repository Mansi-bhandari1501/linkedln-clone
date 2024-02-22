import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRegister } from '../../service/user.service';
import { ACTION_TYPE } from "./actionType";

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
      const res = await userRegister({email,password},config)
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