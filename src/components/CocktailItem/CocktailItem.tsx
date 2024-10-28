import { Link } from "react-router-dom";
import React from "react";
import style from './CocktailItem.module.scss';
import { Cocktail } from "../../types/cocktail";

type Props = {
  cocktail: Cocktail;
  isCocktailsPage: boolean;
}

const CocktailItem: React.FC<Props> = ({ cocktail, isCocktailsPage }) => {
  const { id, photo, name, description, taste, difficulty, cocktail_type } = cocktail;

  return (
    <li className={!isCocktailsPage ? style.wrapper : style.wrapperPage}>
      <Link to={`/cocktail/${id}`} className={style.card}>
        {isCocktailsPage && <div className={style.type}>{cocktail_type}</div>}
        <img src={photo} alt={name} className={! isCocktailsPage ? style.img : style.imgPage} />
        {isCocktailsPage ? (
          <div className={style.info}>
            <h3 className={style.namePage}>{name}</h3>
            <p className={style.descr}>{description}</p>
            <div className={style.tags}>
              <div className={style.taste}>{taste}</div>
              <div className={style.diff}>{difficulty}</div>
            </div>
          </div>
        ) : (
          <h3 className={style.name}>{cocktail.name}</h3>
        )}
      </Link>
    </li>
  );
}

export default CocktailItem;