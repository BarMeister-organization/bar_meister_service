import React from "react";
import style from './Icon.module.scss';

type Props = {
  icon: string;
};

const Icon: React.FC<Props> = ({ icon = '' }) => {
  return (
    <svg className={style.icon}>
      <use href={`img/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;