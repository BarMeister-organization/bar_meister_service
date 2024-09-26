import React from "react";
import { Cocktail } from "../../../types/cocktail";
import style from './CocktailsCardList.module.scss';
import CocktailsCardItem from "../CocktailsCardItem/CocktailsCardItem";

type Props = {
  coctailsCardList: Cocktail[];
}

const CocktailsCardList: React.FC<Props> = ({ coctailsCardList }) => {
  return (
    <ul className={style.list}>
      {coctailsCardList.map(cocktail => (
        <CocktailsCardItem cocktail={cocktail} key={cocktail.id} />
      ))}
    </ul>
  );
}

export default CocktailsCardList;