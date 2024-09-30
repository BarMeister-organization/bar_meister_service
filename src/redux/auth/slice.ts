import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { User } from "../../types/user";

export type AuthSlice = {
  user: User;
  token: string | number | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: AuthSlice = {
  user: {
    username: null,
    email: null,
    password: null,
    birth_date: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
}

const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
    .addCase(register.pending, (state) => {
      state.error = null;
    })
    .addCase(register.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(register.rejected, (state, action) => {
      state.error = action.error.message || "Registration failed";
    })
    .addCase(login.pending, (state) => {
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action: PayloadAction<{ refresh: string; user: User }>) => {
      state.isLoggedIn = true;
      state.token = action.payload.refresh;
      state.user = action.payload.user;
      console.log('Login fulfilled, token:', action.payload.refresh);
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.error.message || "Login failed";
    })
    .addCase(refresh.pending, (state) => {
      state.error = null;
      state.isRefreshing = true;
    })
    .addCase(refresh.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isRefreshing = false;
    })
    .addCase(refresh.rejected, (state, action) => {
      state.error = action.error.message || "Refreshing failed";
      state.isRefreshing = false;
    })
    .addCase(logout.pending, (state) => {
      state.error = null;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(logout.rejected, (state, action) => {
      state.error = action.error.message || "Logout failed";
    })
  });

const authReducer =  authSlice.reducer;

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

export const persistedAuthReducer = persistReducer<AuthSlice>(authConfig, authReducer);
