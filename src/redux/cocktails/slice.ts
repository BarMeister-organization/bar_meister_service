import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../../types/cocktail";
import { fetchCocktails } from "./operations";

type CocktailsSlice = {
  items: Cocktail[],
  loading: boolean,
  error: string | null,
};

const initialState: CocktailsSlice = {
  items: [],
  loading: false,
  error: null,
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCocktails.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchCocktails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
});

export default cocktailsSlice.reducer;
