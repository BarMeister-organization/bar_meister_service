import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instance";
import { FetchCocktailsParams } from "../../types/fetchCocktailsParams";

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchAll',
  async({ limit = 20, offset = 0, tags = '' }: FetchCocktailsParams, thunkAPI) => {
    try {
      const { data } = await instance.get('/barmeister/cocktails/', {
        params: {
          limit,
          offset,
          tags,
        }
      }
    );
    console.log('cocktails:', data.results);
      return data.results;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  }
);
