import React from "react";
import style from './Search.module.scss';
import Icon from "../shared/Icon/Icon";
import ButtonIcon from "../shared/ButtonIcon/ButtonIcon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

type Props = {
  onClose: () => void;
}

const getStyledLink = ({ isActive }: { isActive: boolean }) =>
  classNames(style.link, {
    [style.isActive]: isActive
  });

const Search: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={style.box}>
      <ButtonIcon
        buttonType="button"
        onClick={onClose}
        className={style.close}
      >
        <Icon icon={'icon-close'} color={'#000000'} />
      </ButtonIcon>
      <div className={style.inputBox}>
        <Icon icon={'icon-search'} color={'#000000'} />
        <input 
          type="text" 
          className={style.input}
          autoFocus
          />
      </div>
      <h3 className={style.pages}>Pages</h3>
      <nav className={style.nav}>
        <NavLink to={'/'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-home'} color={isActive ? '#ffffff' : '#353c43'} />
              <p>Home</p>
            </>
          )}
        </NavLink>
        <NavLink to={'/cocktails'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-glass'} color={isActive ? '#ffffff' : '#353c43'} />
              <p>Cocktails</p>
            </>
          )}
        </NavLink>
        <NavLink to={'/bar'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-beaker'} color={isActive ? '#ffffff' : '#353c43'} />
              <p>My Bar</p>
            </>
          )}
        </NavLink>
      </nav>
      <ul>
      </ul>
    </div>
  );
}

export default Search;