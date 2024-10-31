// card.tsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Импортируем useRouter
import styles from "./Card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  documentId: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  documentId,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/card-details?documentId=${documentId}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
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
