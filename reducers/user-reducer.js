import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
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
  },
});

export const { userInfo, addToken } = userReducer.actions;

export default userReducer.reducer;
