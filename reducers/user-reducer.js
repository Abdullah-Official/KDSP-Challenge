import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
    },
  },
});

export const { userInfo, addToken, logout } = userReducer.actions;

export default userReducer.reducer;
