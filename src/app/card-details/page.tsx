// pages/card-details.tsx
"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    <div>
      <h1>{Title}</h1>
      {imageUrl && (
        <Image src={imageUrl} alt={Title} width={579} height={360} />
      )}
      <div>
        {Content &&
          Content.map((contentItem: any, index: number) => (
            <p key={index}>{contentItem.children[0].text}</p>
          ))}
      </div>
    </div>
  );
};

export default CardDetails;
