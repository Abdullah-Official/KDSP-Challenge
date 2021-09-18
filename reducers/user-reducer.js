import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
      name: 'Abdullah',
      age: 21,
      email: 'ponka@hotmail.com'
  },
  token: '',
};

const userReducer = createSlice({
  name: "user",
  initialState,
//   reducers: {
//     userInfo: (state, action) => {
//     //   state.token = action.payload.token;
//     //   state.name = action.payload.name;
//     //   state.userId = action.payload._id;
//     state.user = action.payload
//     },
//     addToken:  (state,action) => {
//     //  await AsyncStorage.setItem('token', action.payload)
//         state.token = action.payload
//     }
//   },
});

// export const { userInfo, logout, addToken } = userReducer.actions;

export default userReducer.reducer;