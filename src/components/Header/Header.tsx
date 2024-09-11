import { Link } from "react-router-dom";
import style from './Header.module.scss';
import logo from '/img/logo.svg';
import { useState } from "react";
import Modal from "../shared/Modal/Modal";
import Search from "../Search/Search";
import ButtonIcon from "../shared/ButtonIcon/ButtonIcon";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <header className={style.header}>
      <Link to="/"> 
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <div className={style.iconsBox}>
        <ButtonIcon
          buttonType={'button'}
          onClick={openModal}
          icon={'icon-search'}
        />
        <ButtonIcon
          buttonType={'button'}
          onClick={openMenu}
          icon={'icon-menu'}
        />
        <div className={style.btnUser}>
          <ButtonIcon
            buttonType={'button'}
            onClick={openMenu}
            icon={'icon-user'}
          />
        </div>
      </div>
      {isOpenModal && (
        <Modal>
          <Search onClose={closeModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;