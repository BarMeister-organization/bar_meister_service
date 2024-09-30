import React from "react";
import style from './Search.module.scss';
import Icon from "../shared/Icon/Icon";
import ButtonIcon from "../shared/ButtonIcon/ButtonIcon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSearchFilter } from "../../redux/searchFilter/selectors";
import { changeFilter } from "../../redux/searchFilter/slice";
import { Cocktail } from "../../types/cocktail";

type Props = {
  cocktails: Cocktail[];
  onClose: () => void;
}

const getStyledLink = ({ isActive }: { isActive: boolean }) =>
  classNames(style.link, {
    [style.isActive]: isActive
  });

const Search: React.FC<Props> = ({ cocktails, onClose }) => {
  const filterValue = useAppSelector(selectSearchFilter);
  const dispatch = useAppDispatch();

  const selectCoctailFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    dispatch(changeFilter(value));
  };

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
          value={filterValue ? filterValue.toString() : ''}
          className={style.input}
          onChange={selectCoctailFilter}
          autoFocus
        />
      </div>
      <h3 className={style.pages}>Pages</h3>
      <nav className={style.nav}>
        <NavLink to={'/'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-home'} color={isActive ? '#ffffff' : '#353c43'} />
              <span>Home</span>
            </>
          )}
        </NavLink>
        <NavLink to={'/cocktails'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-glass'} color={isActive ? '#ffffff' : '#353c43'} />
              <span>Cocktails</span>
            </>
          )}
        </NavLink>
        <NavLink to={'/bar'} className={getStyledLink}>
          {({ isActive }) => (
            <>
              <Icon icon={'icon-beaker'} color={isActive ? '#ffffff' : '#353c43'} />
              <span>My Bar</span>
            </>
          )}
        </NavLink>
      </nav>
      <ul className={style.list}>
        {cocktails.slice(0, 20).map((cocktail) => (
          <li key={cocktail.id} className={style.item}>
            <Icon icon={'icon-drink'} color={'#353c43'} />
            <span>{cocktail.name}</span>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default Search;