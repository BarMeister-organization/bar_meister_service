import classNames from 'classnames';
import style from './Menu.module.scss';
import React from 'react';
import Navigation from '../shared/Navigation/Navigation';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className={classNames(style.menu, {
      [style.menuVisible]: isOpen,
      }) 
    }>
      <div className={style.list}>
        <Navigation showIcons={false} isMenu={true} onClose={onClose} />
      </div>
    </div>
  );
}

export default Menu;