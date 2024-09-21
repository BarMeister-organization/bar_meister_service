import { Link } from "react-router-dom";
import style from './Header.module.scss';
import logo from '/img/logo.svg';
import ButtonIcon from "../shared/ButtonIcon/ButtonIcon";
import React from "react";
import classNames from "classnames";
import Icon from "../shared/Icon/Icon";
import Navigation from "../shared/Navigation/Navigation";

type Props = {
  isOpenMenu: boolean;
  openModal: () => void;
  onToggle: () => void;
};

const Header: React.FC<Props> = ({ 
  isOpenMenu,
  openModal,
  onToggle,
}) => {

  return (
    <header className={classNames(style.header, {
      [style.headerShadow]: isOpenMenu,
      }) 
    }>
      <Link to="/"> 
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <div className={style.iconsBox}>
        <ButtonIcon 
          buttonType={'button'}
          onClick={openModal}
          >
          <Icon icon={'icon-search'} />
          <span className={style.search}>Search</span>
        </ButtonIcon>
        <div className={style.menu}>
          {!isOpenMenu ? (
            <ButtonIcon
              buttonType={'button'}
              onClick={onToggle}
            >
              <Icon icon={'icon-menu'} />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              buttonType={'button'}
              onClick={onToggle}
            >
              <Icon icon={'icon-close'} />
            </ButtonIcon>
          )}
        </div>

        <div className={style.nav}>
          <Navigation showIcons={true} />
        </div>

      </div>
    </header>
  );
}

export default Header;