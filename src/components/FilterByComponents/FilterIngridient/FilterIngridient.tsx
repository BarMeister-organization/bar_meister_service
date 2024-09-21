import React from 'react';
import style from './FilterIngridient.module.scss';
import { Ingridients } from '../../../types/componentsType';

interface Props {
  ingridient: Ingridients;
}

export const FilterIngridient: React.FC<Props> = ({ ingridient }) => {
  return (
    <a href='' className={style.ingridient}>
      <img className={style.image} src={ingridient.componentImage} alt="shake-image" />
      <p className={style.title}>{ingridient.componentName}</p>
    </a>
  );
};