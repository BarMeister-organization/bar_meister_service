import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../Icon/Icon';
import style from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  showIcons: boolean; 
  isMenu?: boolean;
  onClose?: () => void;
};

const navigationItems = [
  { to: "/coctails", icon: 'icon-glass', label: 'Cocktails' },
  { to: "/bar", icon: 'icon-beaker', label: 'My Bar' },
  { to: "/favorites", icon: 'icon-heart', label: 'Favorites' },
  { icon: 'icon-user', label: 'Login/Register' },
  { icon: 'icon-logout', label: 'Log Out' },
];

const Navigation: React.FC<Props> = ({ showIcons, isMenu, onClose }) => {
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
        <ButtonIcon key={index} to={item.to}>
          {showIcons && <Icon icon={item.icon} />}
          <p 
            className={classNames(style.text, {
              [style.textMenu]: isMenu,
            })}
          >
            {item.label}
          </p>
        </ButtonIcon>
      ))}
    </nav>
  );
}

export default Navigation;