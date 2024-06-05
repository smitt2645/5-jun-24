import { createSlice, nanoid } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    isAuthenticated: false,
    token: null
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.isAuthenticated = state.users.some(user => user.username === action.payload.username && user.password === action.payload.password);
    }
  }
});

export default UserSlice.reducer;
export const { register, login } = UserSlice.actions;
