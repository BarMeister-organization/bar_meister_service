import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/shared/Modal/Modal';
import Search from './components/Search/Search';
import { Footer } from './components/Footer';
import UserModal from './components/shared/UserModal/UserModal';
import { ModalType } from './types/modalType';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const openModal = (type: ModalType) => {
    setIsOpenModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
  };

  const handleToggleMenu = () => setIsOpenMenu(prev => !prev);

  return (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openModal={openModal}
        onToggle={handleToggleMenu}
        isLoggedIn={isLoggedIn}
      />

      {isOpenModal && modalType === "search" && (
        <Modal onClose={closeModal}>
          <Search onClose={closeModal} />
        </Modal>
      )}

      {isOpenModal && modalType === "user" && (
        <Modal onClose={closeModal}>
          <UserModal onClose={closeModal} isLoggedIn={isLoggedIn} />
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
