import React from "react";
import style from './UserModal.module.scss'; 
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";

type Props = {
  onClose: () => void;
  isLoggedIn: boolean;
}

const UserModal: React.FC<Props> = ({ onClose, isLoggedIn }) => {

  // const handleSubmit = (value, action);

  return (
    <div className={style.box}>
      <ButtonIcon
        buttonType="button"
        onClick={onClose}
        className={style.close}
      >
        <Icon icon={'icon-close'} color={'#000000'} />
      </ButtonIcon>
      <div className={style.contentBox}>
        {isLoggedIn ? (
          <h2 className={style.title}>Log in</h2>
        ) : (
          <h2 className={style.title}>Register</h2>
        )}

      <form className={style.form}>

      {isLoggedIn ? (
        <div></div>
      ) : (
        <>
          <label htmlFor="username" className={style.label}>
            Username
            <input 
              name="username"
              id="username"
              type="text" 
              className={style.input}
              // value={}
              placeholder="Please enter your username"
              />
          </label>
          <label htmlFor="email" className={style.label}>
            Email
            <input 
              name="email"
              id="email"
              type="email" 
              // value={}
              className={style.input}
              placeholder="Please enter your email"
              />
          </label>
          <label htmlFor="birth" className={style.label}>
            Birth Date
            <input 
              name="birth"
              id="birth"
              type="date" 
              className={style.input}
              />
          </label>
          <label htmlFor="password" className={style.label}>
            Password
            <input 
              name="password"
              id="password"
              type="text" 
              // value={}
              className={style.input}
              />
          </label>
        </>
      )}

        <button 
          type="submit" 
          className={style.button} 
          onClick={onClose}
        >
          {isLoggedIn ? 'Log In' : 'Submit'}
        </button>
      </form>


      </div>
    </div>
  );
}

export default UserModal;
