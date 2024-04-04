import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  user: null,
  token: null,
};

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { setTheme, login, logout, setUser } = slice.actions;
export default slice.reducer;
