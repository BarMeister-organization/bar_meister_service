import React from 'react';
import style from './FilterByModules.module.scss';
import { popularComponents } from '../../utils/ingridients';
import { FilterIngridient } from './FilterIngridient';

export const FilterByComponents: React.FC = () => {
  const firstRow = popularComponents.slice(0, Math.ceil(popularComponents.length / 2));
  const secondRow = popularComponents.slice(Math.ceil(popularComponents.length / 2), popularComponents.length);

  return (
    <div className={style['filter-block']}>
      <h2 className={style.title}>Up for a drink?</h2>
      <p className={style.subtitle}>Find a cocktail based on one of the below ingredients.</p>
      <div className={style.filter}>
        <div className={style.firstRow}>
          {firstRow.map(item => (
            <FilterIngridient ingridient={item}/>
          ))}
        </div>
        <div className={style.secondRow}>
          {secondRow.map(item => (
            <FilterIngridient ingridient={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};