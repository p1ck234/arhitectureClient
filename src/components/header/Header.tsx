import React from "react";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.header__span}>architecture</span>
      <div className={styles.header__contacts}>
        <a href="#" className={clsx(styles.header__link, styles.header__link_active) }>Project</a>
        <a href="#" className={styles.header__link}>News</a>
        <a href="#" className={styles.header__link}>Blog</a>
        <a href="#" className={styles.header__link}>Contacts</a>
        <span className={styles.header__line}>|</span>
        <a href="#" className={styles.header__link}>Call me</a>
        <span className={styles.header__line}>|</span>
        <a href="#" className={styles.header__link}>+7 (911) 818-34-10</a>
      </div>
    </header>
  );
};

export default Header;
