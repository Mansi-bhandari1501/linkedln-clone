import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, loginUser, registerUser  } from "./userAction";

const initalState = {
  loading: false,
  userInfo: {},
  userToken: null,
  userId:null,
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
      console.log(action, "gerh4")
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action, "error")
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("from user slice", action.payload.data)

      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.data.user;
      state.userId = action.payload.data.user._id;
      state.userToken = action.payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = action.error.message;
    });
    // builder.addCase(userDetails.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(userDetails.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.success = true;
    //   state.userInfo = action.payload.data.user;
    //   console.log(state.userInfo);
    // });
    // builder.addCase(userDetails.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });

    // fetchUsers
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      state.userInfo = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
});


export default userSlice.reducer;