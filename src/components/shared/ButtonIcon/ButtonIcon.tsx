import React from 'react';
import style from './ButtonIcon.module.scss';
import { Link, Path } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  className?: string;
  to?: string | Partial<Path>;
  onClick?: (event: React.MouseEvent) => void;
  buttonType?: "button" | "submit" | "reset";
};

const ButtonIcon: React.FC<Props> = ({ 
  children,
  className = '',
  to = '',
  onClick = () => {},
  buttonType = 'button',
}) => {

  return to ? (
    <Link
      to={to}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      <div className={style.children}>
        {children}
      </div>
    </Link>
  ) : (
    <button 
      type={buttonType}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      <div className={style.children}>
        {children}
      </div>
    </button>
  );
}

export default ButtonIcon;