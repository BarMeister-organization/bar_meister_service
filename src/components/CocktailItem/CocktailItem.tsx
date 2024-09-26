import React from "react";
import { Cocktail } from "../../types/cocktail";

type Props = {
  cocktail: Cocktail;
}

const CocktailItem: React.FC<Props> = ({ cocktail }) => {
  return (
    <li key={cocktail.id}>{cocktail.name}</li>
  );
}

export default CocktailItem;