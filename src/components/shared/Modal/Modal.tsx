import React from "react";
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  const portalRoot = document.getElementById('root-portal');

  if (!portalRoot) {
    console.error('Portal root not found');
    return null;
  }

  return ReactDOM.createPortal (
    <div className={style.modal} onClick={onClose}>
      {children}
    </div>,
    portalRoot,
  );
}

export default Modal;