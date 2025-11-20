import React from "react";
import { BookCardContainer, BookImage, BookTitle } from "./style";

interface Props {
  image: string;
  title: string;
}

const BookCard: React.FC<Props> = ({ image, title }) => {
  return (
    <BookCardContainer>
      <BookImage src={image} alt={title} />
      <BookTitle>{title}</BookTitle>
    </BookCardContainer>
  );
};

export { BookCard};