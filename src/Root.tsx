import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CocktailsPage from "./pages/CocktailsPage";
import RecipePage from "./pages/RecipePage";
import MyBarPage from "./pages/MyBarPage";
import FavoritesPage from "./pages/FavoritesPage";

export const Root: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/cocktails" element={<CocktailsPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/bar" element={<MyBarPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}