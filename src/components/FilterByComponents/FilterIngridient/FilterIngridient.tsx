import React from 'react';
import style from './FilterIngridient.module.scss';
import { Ingridients } from '../../../types/componentsType';
import { Link } from 'react-router-dom';

interface Props {
  ingridient: Ingridients;
}

export const FilterIngridient: React.FC<Props> = ({ ingridient }) => {
  return (
    <Link to={`/cocktails-with-ingridients/${ingridient.ingridientName}`} className={style.ingridient}>
      <svg className={style.image}>
        <use href={ingridient.componentImage}></use>
      </svg>
      <p className={style.title}>{`${ingridient.componentName} cocktails`}</p>
    </Link>
  );
};