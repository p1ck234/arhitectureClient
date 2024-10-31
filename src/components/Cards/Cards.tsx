import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.length > 0 ? (
        cards.map((item) => (
          <Card
            key={item.id}
            imageUrl={
              item.Image && item.Image.length > 0
                ? `http://localhost:1337${
                    item.Image[0].formats?.small?.url || item.Image[0].url
                  }`
                : "/default-image.png"
            }
            title={item.Title || "Без названия"}
            description={
              item.Content && item.Content[0].children
                ? item.Content[0].children[0].text
                : "Описание отсутствует"
            }
          />
        ))
      ) : (
        <p className={styles.cards__error}>Проект отсутствует</p>
      )}
    </div>
  );
};

export default Cards;
