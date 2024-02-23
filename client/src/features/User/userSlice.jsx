import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actionCreator";

const initalState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action,"gerh4")
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action,"error")
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("slice", action.payload.data.user);
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.data.user;
      state.userToken = action.payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = action.error.message;
    });
  },
});


export default userSlice.reducer;