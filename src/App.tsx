import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/shared/Modal/Modal';
import Search from './components/Search/Search';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const handleToggleMenu = () => setIsOpenMenu(prev => !prev);

  // useEffect(() => {
  //   if (isOpenMenu) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isOpenMenu]);

  return (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openModal={openModal}
        onToggle={handleToggleMenu}
      />

      {isOpenModal && (
        <Modal onClose={closeModal}>
          <Search onClose={closeModal} />
        </Modal>
      )}
      {isOpenMenu && <Menu isOpen={isOpenMenu} onClose={handleToggleMenu} />}

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
