import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      id: "",
      name: "",
      role_id: "",
      email: "",
    },
  },
  reducers: {
      login: (state, action) => {
        let { payload } = action;
        state.credentials.token = payload.token;
        state.data.id = payload.data.id;
        state.data.name = payload.data.name;
        state.data.role_id = payload.data.role_id;
        state.data.email = payload.data.email;
      },
      logout: (state) => {
        state.credentials.token = "";
        state.data.name = "";
        state.data.role_id = "";
      },
  },
});

export const userData = (state) => state.user.data;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
