import React from "react";
import { BestSellersWrapper, BestSellersContainer } from "./style";
import { BookCard } from "../../Components/BookCard/BookCard";
import books from "../../../books.json";

const BestSellers: React.FC = () => {
  const bestSellers = books.slice(0, 6);

  return (
    <BestSellersWrapper>
      <h2>Mais Vendidos</h2>

      <BestSellersContainer>
        {bestSellers.map((book, index) => (
          <BookCard
            key={index}
            image={book.image}
            title={book.title}
          />
        ))}
      </BestSellersContainer>
    </BestSellersWrapper>
  );
};

export { BestSellers };
