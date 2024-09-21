import React from "react";
import styles from './Footer.module.scss';
import { socials } from "../../utils/Footer/socials";
// import heart from '/bar_meister_service/public/img/footer/heart.svg';
import heart from '/img/footer/heart.svg';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>Cocktails</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>My Bar</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>About</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>Favourites</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>Personal account</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>FAQ</a>
          </li>
          <li className={`${styles.item} ${styles['item--links']}`}>
            <a href="" className={styles.link}>Privacy police</a>
          </li>
        </ul>
        <ul className={styles.socials}>
          {socials.map(social => (
            <li key={social.socialName} className={styles.item}>
              <a href={social.socialLink} className={`${styles.links} ${styles[`link--${social.socialName}`]}`}>
                <img className={styles.image} src={social.socialImage} alt="icon" />
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.button}>
          <img src={heart} alt="heart" />
          <p>Support us</p>
        </button>
      </nav>
      <p className={styles.copyright}>Copyright © 2024 Make me a cocktail. All Rights Reserved</p>
    </div>
  );
};