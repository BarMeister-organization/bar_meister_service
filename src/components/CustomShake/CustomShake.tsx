import React from "react";
import style from './CustomStake.module.scss';

export const CustomShake: React.FC = () => {
  return (
    <div className={style['custom-shake']}>
        <div className={style.block}>
          <div className={style.content}>
            <h2 className={style.title}>Build your bar</h2>
            <p className={style.text}>
              Tell us what you have at home and we’ll find a delicious cocktail for you to make right now.
            </p>
            <p className={style.text}>
              Register as a Make Me a Cocktail community member and we’ll save your ingredients list so you can come back to it at any time.
            </p>
            <button type="button" className={style.button}>Create my Bar</button>
          </div>
          <img className={style.image} src="img/customShake/homeBar.jpg" alt="" />
        </div>
        <div className={style.block}>
          <div className={`${style.content} ${style['content--2']}`}>
            <h2 className={style.title}>Make your own shake</h2>
            <p className={style.text}>
              Choose a theme and some ingredients, give us some description and we'll create an amazing cocktail for you.
            </p>
            <p className={style.text}>
              Register as a Premium Make Me a Cocktail community member and get access to an even more powerful creator.
            </p>
            <button type="button" className={style.button}>Start creating</button>
          </div>
          <img className={style.image} src="img/customShake/cocktails.jpg" alt="" />
        </div>
    </div>
  );
};