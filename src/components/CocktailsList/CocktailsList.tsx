import React from "react";
import style from './CocktailsList.module.scss';
import CocktailItem from "../CocktailItem/CocktailItem";
import { Cocktail } from "../../types/cocktail";

type Props = {
  cocktails: Cocktail[];
}

const CocktailsList: React.FC<Props> = ({ cocktails }) => {
  return (
    <ul className={style.list}>
      {cocktails.map(cocktail => (
        <CocktailItem cocktail={cocktail} key={cocktail.id} />
      ))}
    </ul>
  );
}

export default CocktailsList;