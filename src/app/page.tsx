"use client";

import Cards from "@/components/Cards/Cards";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Tabs from "@/components/tabs/Tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css"

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("Architectural Design");
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    // Получаем данные из Strapi
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/articles?populate=*"
        );
        setAllCards(response.data.data);
      } catch (error) {
        console.error("Ошибка при получении данных из Strapi", error.response);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = allCards.filter(
    (card) =>
      card.Name && card.Name.length > 0 && card.Name[0].Name === selectedTag
  );

  return (
    <div>
      <Main />
      <Tabs onSelectTag={setSelectedTag} />
      <Cards cards={filteredCards} />
    </div>
  );
}
