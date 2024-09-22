import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectCocktails } from "../cocktails/selectors";

export const selectSearchFilter = (state: RootState) => state.search.value;
export const selectVisibleCoctails = createSelector(
  [selectCocktails, selectSearchFilter],
  (cocktails, filter) => {
    return cocktails.filter(cocktail => 
      cocktail.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
);