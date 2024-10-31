"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const CardDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const documentId = searchParams.get("documentId");
  const [cardData, setCardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (documentId) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `http://localhost:1337/api/articles?filters[documentId][$eq]=${documentId}&populate=*`
          );
          const data = await res.json();

          console.log("API Response:", data); // Добавляем логирование

          if (data && data.data && data.data.length > 0) {
            setCardData(data.data[0]);
          } else {
            setCardData(null);
          }
        } catch (error) {
          console.error("Ошибка при загрузке данных:", error);
          setCardData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [documentId]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!cardData) {
    return <p>Данные не найдены</p>;
  }

  const { Title, Content, Image: images } = cardData;

  const imageUrl =
    images && images.length > 0
      ? `http://localhost:1337${images[0].formats?.small?.url || images[0].url}`
      : "/default-image.png";

  return (
    <div className={styles.page__box}>
      {imageUrl && (
        <Image src={imageUrl} alt={Title} width={579} height={360} />
      )}
      <div>
        <h1 className={styles.title}>{Title}</h1>
        {Content &&
          Content.map((contentItem: any, index: number) => (
            <p className={styles.page__p} key={index}>
              {contentItem.children[0].text}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CardDetails;
