import { RootState } from "../store";

export const selectCocktails = (state: RootState) => state.cocktails.items;
export const selectCocktailsError = (state: RootState) => state.cocktails.error;
export const selectCocktailsIsLoading = (state: RootState) => state.cocktails.loading;