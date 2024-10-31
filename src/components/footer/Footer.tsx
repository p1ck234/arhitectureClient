import React from "react";
import styles from "./Footer.module.css";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.footer__span}>architecture</span>
        <span className={styles.footer__cop}>(с) 2024, all rights reserved</span>
      </div>
      <div className={styles.footer__contacts}>
        <a
          href="#"
          className={clsx(styles.footer__link)}
        >
          Project
        </a>
        <a href="#" className={styles.footer__link}>
          News
        </a>
        <a href="#" className={styles.footer__link}>
          Blog
        </a>
        <a href="#" className={styles.footer__link}>
          Contacts
        </a>
        <span className={styles.footer__line}>|</span>
        <a href="#" className={styles.footer__link}>
          Call me
        </a>
        <span className={styles.footer__line}>|</span>
        <a href="#" className={styles.footer__link}>
          +7 (911) 818-34-10
        </a>
      </div>{" "}
    </footer>
  );
};

export default Footer;
