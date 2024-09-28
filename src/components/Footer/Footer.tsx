import React from "react";
import styles from './Footer.module.scss';
import { socials } from "../../utils/Footer/socials";

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
                <svg className={styles.image}>
                  <use href={social.socialImage}></use>
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.button}>
          <svg className={styles['heart-icon']}>
            <use href="img/sprite.svg#icon-footer-heart"></use>
          </svg>
          <p>Support us</p>
        </button>
      </nav>
      <p className={styles.copyright}>Copyright © 2024 Make me a cocktail. All Rights Reserved</p>
    </div>
  );
};