import { Link } from "react-router-dom";
import { Cocktail } from "../../../types/cocktail";
import React from "react";
import style from './CocktailsCardItem.module.scss';

type Props = {
  cocktail: Cocktail;
}

const CocktailsCardItem: React.FC<Props> = ({ cocktail }) => {
  return (
    <li>
      <Link to={'/'} className={style.card} >
        <img src={cocktail.photo} alt={cocktail.name} className={style.img} />
        <h3 className={style.name}>{cocktail.name}</h3>
      </Link>
    </li>
  );
}

export default CocktailsCardItem;