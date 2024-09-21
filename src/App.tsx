import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/shared/Modal/Modal';
import Search from './components/Search/Search';
import { Footer } from './components/Footer';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const handleToggleMenu = () => setIsOpenMenu(prev => !prev);

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
      <Footer />
    </>
  )
}

export default App
