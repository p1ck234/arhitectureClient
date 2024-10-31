import React, { useState } from "react";
import styles from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ onSelectTag }) => {
  const [activeTag, setActiveTag] = useState("Architectural Design");

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    onSelectTag(tag);
  };

  return (
    <div className={styles.tabs}>
      <button
        onClick={() => handleTagClick("Architectural Design")}
        className={clsx(styles.tabs__btn, {
          [styles.tabs__btn_active]: activeTag === "Architectural Design",
        })}
      >
        Architectural Design
      </button>
      <span className={styles.tabs__span}>|</span>
      <button
        onClick={() => handleTagClick("Residential Interiors")}
        className={clsx(styles.tabs__btn, {
          [styles.tabs__btn_active]: activeTag === "Residential Interiors",
        })}
      >
        Residential Interiors
      </button>
      <span className={styles.tabs__span}>|</span>
      <button
        onClick={() => handleTagClick("Commercial Interior")}
        className={clsx(styles.tabs__btn, {
          [styles.tabs__btn_active]: activeTag === "Commercial Interior",
        })}
      >
        Commercial Interior
      </button>
    </div>
  );
};

export default Tabs;
