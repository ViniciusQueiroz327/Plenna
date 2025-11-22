import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  Slide,
  DotsWrapper,
  Dot
} from "./style";

import { BookCard } from "../BookCard/BookCard";

interface SlideBook {
  id: string;
  img: string;
  title: string;
}

export const HeroCarousel: React.FC = () => {
  const [slides, setSlides] = useState<SlideBook[]>([]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://plenna-api.onrender.com/api/books");
        const data = await res.json();

        if (!Array.isArray(data)) return;

        const shuffled = data.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 10);

        const formatted = selected.map(book => ({
          id: book.id,
          img: book.capa,
          title: book.titulo
        }));

        setSlides(formatted);
      } catch (err) {
        console.error("Erro ao carregar livros do carrossel:", err);
      }
    };

    fetchBooks();
  }, []);

  // AUTOPLAY + PAUSE
  useEffect(() => {
    if (slides.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides, isPaused]);

  if (slides.length === 0) return null;

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* LEFT ARROW */}
      <button
        className="arrow left"
        onClick={() =>
          setIndex(index === 0 ? slides.length - 1 : index - 1)
        }
      >
        ❮
      </button>

      {/* SLIDE */}
      <Slide key={index} className="fade">
        <BookCard
          key={slides[index].id}
          image={slides[index].img}
          title={slides[index].title}
          id={slides[index].id}
        />
      </Slide>

      {/* RIGHT ARROW */}
      <button
        className="arrow right"
        onClick={() =>
          setIndex(index === slides.length - 1 ? 0 : index + 1)
        }
      >
        ❯
      </button>

      {/* DOTS */}
      <DotsWrapper>
        {slides.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
        ))}
      </DotsWrapper>
    </CarouselContainer>
  );
};