import { createAsyncThunk } from "@reduxjs/toolkit";
import { cleanAuthHeader, instance, setAuthHeaders } from "../../services/instance";
import { RootState } from "../store";

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/user/register/', userData);
      setAuthHeaders(data.token);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  } 
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
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
      await instance.post('/user/logout/');
      cleanAuthHeader()
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
      const token = state.auth.token;
      setAuthHeaders(token);
      const { data } = await instance.get('/user/token/refresh/');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const token = state.auth.token;

      if (token) return true;

      return false;
    }
  } 
);