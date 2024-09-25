import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  value: String;
};

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { changeFilter } = searchSlice.actions;

export default searchSlice.reducer;