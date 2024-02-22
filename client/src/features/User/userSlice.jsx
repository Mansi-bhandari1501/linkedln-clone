import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actionCreator";

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
}
})

export default userSlice.reducer;