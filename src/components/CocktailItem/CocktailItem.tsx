import { Link } from "react-router-dom";
import React from "react";
import style from './CocktailItem.module.scss';
import { Cocktail } from "../../types/cocktail";

type Props = {
  cocktail: Cocktail;
}

const CocktailItem: React.FC<Props> = ({ cocktail }) => {
  return (
    <li>
      <Link to={'/'} className={style.card} >
        <img src={cocktail.photo} alt={cocktail.name} className={style.img} />
        <h3 className={style.name}>{cocktail.name}</h3>
      </Link>
    </li>
  );
}

export default CocktailItem;