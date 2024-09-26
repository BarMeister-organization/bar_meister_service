import React from "react";
import { Cocktail } from "../../types/cocktail";
import CocktailItem from "../CocktailItem/CocktailItem";

type Props = {
  cocktails: Cocktail[];
}

const CocktailsList: React.FC<Props> = ({ cocktails }) => {
  return (
    <ul>
      {cocktails.map(cocktail => (
        <CocktailItem cocktail={cocktail} />
      ))}
    </ul>
  );
}

export default CocktailsList;