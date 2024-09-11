import React from 'react';
import style from './ButtonIcon.module.scss';
import { Link, Path } from 'react-router-dom';

type Props = {
  className?: string;
  to?: string | Partial<Path>;
  onClick?: (event: React.MouseEvent) => void;
  buttonType?: 'button' | 'submit' | 'reset';
  icon?: string,
};

const ButtonIcon: React.FC<Props> = ({ 
  className = '',
  to = '',
  onClick = () => {},
  buttonType = 'button',
  icon = '',
}) => {

  return to ? (
    <Link
      to={to}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      <svg className={style.icon}>
        <use href={`img/sprite.svg#${icon}`}></use>
      </svg>
    </Link>
  ) : (
    <button 
      type={buttonType}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      <svg className={style.icon}>
        <use href={`img/sprite.svg#${icon}`}></use>
      </svg>
    </button>
  );
}

export default ButtonIcon;