import React from "react";
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['top-block']}>
        <div className={styles.links}></div>
        <div className={styles.socials}></div>
        <div className={styles.support}></div>
      </div>
      <p className={styles.copyright}>Copyright © 2024 Make me a cocktail. All Rights Reserved</p>
    </div>
  );
};