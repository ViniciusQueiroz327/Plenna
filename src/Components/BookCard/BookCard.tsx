import React from "react";
import { useNavigate } from "react-router-dom";
import { BookCardContainer, BookImage, BookTitle } from "./style";

interface Props {
  image: string;
  title: string;
  id: string;   
}

const BookCard: React.FC<Props> = ({ image, title, id }) => {
  const navigate = useNavigate();

  return (
    <BookCardContainer onClick={() => navigate(`/book/${id}`)}>
      <BookImage src={image} alt={title} />
      <BookTitle>{title}</BookTitle>
    </BookCardContainer>
  );
};

export { BookCard };
