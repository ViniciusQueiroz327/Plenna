import React, { useEffect, useState } from "react";
import { BestSellersWrapper, BestSellersContainer } from "./style";
import { BookCard } from "../BookCard/BookCard";

const BestSellers: React.FC = () => {
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plenna-api.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBestSellers(data.slice(0, 6));
      })
      .catch((err) => console.error("Erro ao carregar livros:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <BestSellersWrapper>
      <h2>Best Sellers</h2>

      <BestSellersContainer>
        {bestSellers.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            image={book.capa}
            title={book.titulo}
          />
        ))}
      </BestSellersContainer>
    </BestSellersWrapper>
  );
};

export { BestSellers };
