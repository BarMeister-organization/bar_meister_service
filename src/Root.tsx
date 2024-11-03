import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CocktailsPage from "./pages/CocktailsPage/CocktailsPage";
import RecipePage from "./pages/RecipePage";
import MyBarPage from "./pages/MyBarPage";
import FavoritesPage from "./pages/FavoritesPage";
import IngridientsPage from "./pages/IngridientsPage";
import IngridientDetail from "./components/IngridientDetailInfo/IngridientDetail";
import CocktailPage from "./pages/CocktailPage";

export const Root: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/cocktails/:cocktailId" element={<CocktailPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/bar" element={<MyBarPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/ingredients" element={<IngridientsPage />} />
          <Route path="/ingredient/:paramsIngredient" element={<IngridientDetail />} />
          {/* <Route path="cocktails-with-ingridients/:ingridient" element={}/> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}