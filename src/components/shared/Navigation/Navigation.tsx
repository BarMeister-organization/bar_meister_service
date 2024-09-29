import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../Icon/Icon';
import style from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ModalType } from '../../../types/modalType';

type Props = {
  showIcons: boolean; 
  isMenu?: boolean;
  onClose?: () => void;
  isLoggedIn?: boolean;
  openModal: (type: ModalType) => void;
};

const navigationItems = [
  { to: "/cocktails", icon: 'icon-glass', label: 'Cocktails' },
  { to: "/bar", icon: 'icon-beaker', label: 'My Bar' },
  { to: "/favorites", icon: 'icon-heart', label: 'Favorites' },
];

const Navigation: React.FC<Props> = ({ showIcons, isMenu, onClose, isLoggedIn, openModal }) => {

  return (
    <nav className={classNames(style.nav, {
      [style.navMenu]: isMenu,
    }) 
    }>
      {isMenu && (
        <Link to="/" className={style.text} onClick={onClose}>
          Home
      </Link>
      )}
      {navigationItems.map((item, index) => (
        <ButtonIcon 
          key={index} 
          to={item.to} 
          onClick={onClose}
        >
          {showIcons && <Icon icon={item.icon} />}
          <span 
            className={classNames(style.text, {
              [style.textMenu]: isMenu,
            })}
          >
            {item.label}
          </span>
        </ButtonIcon>
      ))}
      {!isLoggedIn ? (
        <ButtonIcon
          buttonType='button'
          onClick={() => openModal("user")}
        >
          {showIcons && <Icon icon={'icon-user'}/>}
          {!isLoggedIn ? (
            <span className={style.text}>Login/Register</span>
          ) : (
            <span className={style.text}>User</span>
          )}
        </ButtonIcon>
      ) : (
        <ButtonIcon
          buttonType='button'
        >
          {showIcons && <Icon icon={'icon-logout'} />}
          <span className={style.text}>Log Out</span>
        </ButtonIcon>
      ) }
      
    </nav>
  );
}

export default Navigation;