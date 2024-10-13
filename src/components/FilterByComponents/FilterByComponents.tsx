import React from 'react';
import style from './FilterByModules.module.scss';
import { popularComponents } from '../../utils/ingridients';
import { FilterIngridient } from './FilterIngridient';
import { shuffleArray } from '../../utils/FilterByComponents';

export const FilterByComponents: React.FC = () => {
  const shuffledComponents = shuffleArray(popularComponents);
  const firstRow = shuffledComponents.slice(0, 15);
  const secondRow = shuffledComponents.slice(15, 30);

  return (
    <div className={style['filter-block']}>
      <h2 className={style.title}>Up for a drink?</h2>
      <p className={style.subtitle}>Find a cocktail based on one of the below ingredients.</p>
      <div className={style.filter}>
        <div className={style.firstRow}>
          {firstRow.map(item => (
            <FilterIngridient ingridient={item} key={item.componentName}/>
          ))}
        </div>
        <div className={style.secondRow}>
          {secondRow.map(item => (
            <FilterIngridient ingridient={item} key={item.componentName}/>
          ))}
        </div>
      </div>
    </div>
  );
};