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
        const { token, name, userId, role_id } = action.payload;
        state.credentials.token = token;
        state.data.name = name;
        state.data.user_id = userId;
        state.data.role_id = role_id;
      },
    //   logout: (state) => {
    //     state.credentials.token = "";
    //     state.data.name = "";
    //     state.data.user_id = "";
    //     state.data.role_id = "";
    //   },
  },
});

export const userData = (state) => state.user;
export const { login } = userSlice.actions;
export default userSlice.reducer;