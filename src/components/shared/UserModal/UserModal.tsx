import React, { useState } from "react";
import style from './UserModal.module.scss'; 
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import LoginForm from "../../LoginForm/LoginForm";
import RegistrationForm from "../../RegistrationForm/RegistrationForm";

type Props = {
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ onClose }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleToggleMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <div className={style.box} onClick={handleModalClick}>
      <ButtonIcon
        buttonType="button"
        onClick={onClose}
        className={style.close}
      >
        <Icon icon={'icon-close'} color={'#000000'} />
      </ButtonIcon>
      <div className={style.contentBox}>
      <h2 className={style.title}>{isLoginMode ? 'Log in' : 'Register'}</h2>

        {isLoginMode ? (
          <LoginForm onClose={onClose} />
        ) : (
          <RegistrationForm onClose={onClose} />
        )}

        <div className={style.nav}>
          <p>{isLoginMode ? "Don't have an account?" : 'Already have an account?'}</p>
          <p className={style.linkBtn} onClick={handleToggleMode}>
            {isLoginMode ? 'Register' : 'Log in'}
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserModal;
