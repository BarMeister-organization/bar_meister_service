import React from "react";
import style from './CategoryFilter.module.scss';

interface Props {
  setFilterByCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryFilter: React.FC<Props> = ({ setFilterByCategory }) => {
  const categories = [
    'Mixer',
    'Spirit',
    'Other',
    'Wine',
    'Liqueur',
    'Beer',
  ];


  return (
    <div className={style.block}>
      {categories.map(category => (
        <div onClick={() => setFilterByCategory(category)} className={style.category} key={category}>
            <svg className={style.icon}>
              <use href="img/sprite.svg#icon-star"></use>
            </svg>
            <p className={style.titles} >{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;