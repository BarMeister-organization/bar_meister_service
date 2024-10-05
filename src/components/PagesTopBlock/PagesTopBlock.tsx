import React from 'react';
import style from './PagesTopBlock.module.scss';

interface Props {
  title: string;
  bgImage: string;
}

export const PagesTopBLock: React.FC<Props> = ({ title, bgImage }) => {
  return (
    <div className={style.content}>
      <div className={style.image} style={{backgroundImage: `url(${bgImage})`}}></div>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};