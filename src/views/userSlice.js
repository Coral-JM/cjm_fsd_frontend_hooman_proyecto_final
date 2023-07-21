import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      name: "",
      user_id: "",
      role_id: "",
    },
  },
  reducers: {
      login: (state, action) => {
        let { payload } = action;
        state.credentials.token = payload.token;
        state.data.name = payload.data.name;
        state.data.user_id = payload.data.user_id;
        state.data.role_id = payload.data.role_id;
      },
      logout: (state) => {
        state.credentials.token = "";
        state.data.name = "";
        state.data.user_id = "";
        state.data.role_id = "";
      },
  },
});

export const userData = (state) => state.user.data;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;