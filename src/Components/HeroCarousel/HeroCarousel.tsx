import React, { useState } from "react";
import {
  CarouselContainer,
  Slide,
  SlideContent,
  SlideTitle,
  DotsWrapper,
  BookImage,
  Dot
} from "./style";
import books from "../../../books.json";

const slides = books.map(book => ({
  img: book.image,
  title: book.title,
}));

export const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <CarouselContainer>
      <button className="arrow left" onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}>
        ❮
      </button>
      <Slide>
        <BookImage src={slides[index].img} alt={slides[index].title}/>
        <SlideContent>
          <SlideTitle>{slides[index].title}</SlideTitle>
        </SlideContent>
      </Slide>
      <button className="arrow right" onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}>
        ❯
      </button>
      {/* Pontinhos */}
      <DotsWrapper>
        {slides.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
        ))}
      </DotsWrapper>
    </CarouselContainer>
  );
};
