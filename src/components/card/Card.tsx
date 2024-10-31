import React from "react";
import Image from "next/image";
import styles from "./Card.module.css"

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.card}>
      {imageUrl ? (
        <Image src={imageUrl} alt={title} width={579} height={360} />
      ) : (
        <p>Изображение недоступно</p>
      )}
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__p}>{description}</p>
    </div>
  );
};

export default Card;
