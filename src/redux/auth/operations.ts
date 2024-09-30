import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, instance, setAuthHeaders } from "../../services/instance";
import { RootState } from "../store";
import { User } from "../../types/user";

export const register = createAsyncThunk(
  'auth/register',
  async (userData: User, thunkAPI) => {
    try {
      const { data } = await instance.post('/user/register/', userData);
      setAuthHeaders(data.token);
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  } 
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData: User, thunkAPI) => {
    try {
      const { data } = await instance.post('/user/token/', userData);
      setAuthHeaders(data.token);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  } 
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const refreshToken = state.auth.token;

      await instance.post('/user/token/blacklist/', {
        refresh: refreshToken,
      });
      clearAuthHeader()
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  } 
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const refreshToken = state.auth.token;

      console.log('Attempting to refresh token with:', refreshToken);

      const { data } = await instance.post('/user/token/refresh/', {
        refresh: refreshToken, 
      });
      
      setAuthHeaders(data.access);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const refreshToken = state.auth.token;

      if (refreshToken) return true;

      return false;
    }
  } 
);