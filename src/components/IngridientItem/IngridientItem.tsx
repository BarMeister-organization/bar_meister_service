import React from 'react';
import style from './IngridientItem.module.scss';
import { Link } from 'react-router-dom';
import { Ingridients } from '../../types/componentsType';

interface Props {
  ingridient: Ingridients;
}

const IngridientItem: React.FC<Props> = ({ ingridient }) => {
  return (
    <Link to={`/ingredient/${ingridient.ingridientName}`} className={style.item}>
      <div className={style.image} style={{backgroundImage: `url(${ingridient.ingridientBackgroundImg})`}}></div>
      <p className={style.title}>{ingridient.componentName}</p>
    </Link>
  );
};

export default IngridientItem;