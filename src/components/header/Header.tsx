"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="/" onClick={() => handleLinkClick("architecture")}>
        <span className={styles.header__span}>architecture</span>
      </a>

      <button className={styles.burger} onClick={toggleMenu}>
        ☰
      </button>

      <div
        className={clsx(styles.header__contacts, {
          [styles.header__contacts_open]: isMenuOpen,
        })}
      >
        <a
          href="#"
          onClick={() => handleLinkClick("Project")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "Project",
          })}
        >
          Project
        </a>
        <a
          href="#"
          onClick={() => handleLinkClick("News")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "News",
          })}
        >
          News
        </a>
        <a
          href="#"
          onClick={() => handleLinkClick("Blog")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "Blog",
          })}
        >
          Blog
        </a>
        <a
          href="#"
          onClick={() => handleLinkClick("Contacts")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "Contacts",
          })}
        >
          Contacts
        </a>
        <span className={styles.header__line}>|</span>
        <a
          href="#"
          onClick={() => handleLinkClick("Call me")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "Call me",
          })}
        >
          Call me
        </a>
        <span className={styles.header__line}>|</span>
        <a
          href="#"
          onClick={() => handleLinkClick("+7 (911) 818-34-10")}
          className={clsx(styles.header__link, {
            [styles.header__link_active]: activeLink === "+7 (911) 818-34-10",
          })}
        >
          +7 (911) 818-34-10
        </a>
      </div>
    </header>
  );
};

export default Header;
