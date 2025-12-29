import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("auth_token"),
  email: localStorage.getItem("user_email")
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;

      localStorage.setItem("auth_token", action.payload.token);
      localStorage.setItem("user_email", action.payload.email);
    },
    logout: (state) => {
      state.token = null;
      state.email = null;

      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_email");
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
