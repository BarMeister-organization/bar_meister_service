import React from "react";
import style from './Icon.module.scss';

type Props = {
  icon: string;
  color?: string;
};

const Icon: React.FC<Props> = ({ icon = '', color = '#ffffff'}) => {
  return (
    <svg className={style.icon} fill={color}>
      <use href={`img/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;