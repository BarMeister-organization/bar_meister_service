import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/shared/Modal/Modal';
import Search from './components/Search/Search';
import { Footer } from './components/Footer';
import UserModal from './components/shared/UserModal/UserModal';
import { ModalType } from './types/modalType';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectAuthIsLoggedIn, selectAuthIsRefreshing } from './redux/auth/selectors';
import { refresh } from './redux/auth/operations';
import Loader from './components/shared/Loader/Loader';
import store from './redux/store';
import { selectVisibleCoctails } from './redux/searchFilter/selectors';
import { fetchCocktails } from './redux/cocktails/operations';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
  const isRefreshing = useAppSelector(selectAuthIsRefreshing);
  const dispatch = useAppDispatch();
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const cocktails = useAppSelector(selectVisibleCoctails);

  useEffect(() => {
    dispatch(fetchCocktails({}));
  }, [dispatch]);

  useEffect(() => {
    const state = store.getState().auth;
    if (state.token) {
      dispatch(refresh());
    }
  }, [dispatch]);

  const openModal = (type: ModalType) => {
    setIsOpenModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
  };

  const handleToggleMenu = () => setIsOpenMenu(prev => !prev);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openModal={openModal}
        onToggle={handleToggleMenu}
        isLoggedIn={isLoggedIn}
      />

      {isOpenModal && modalType === "search" && (
        <Modal onClose={closeModal}>
          <Search cocktails={cocktails} onClose={closeModal} />
        </Modal>
      )}

      {isOpenModal && modalType === "user" && (
        <Modal onClose={closeModal}>
          <UserModal onClose={closeModal} />
        </Modal>
      )}

      {isOpenMenu && <Menu isOpen={isOpenMenu} onClose={handleToggleMenu} />}

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
