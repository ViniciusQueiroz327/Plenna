import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 500px;
  background: #f3f4f6;

  border-radius: 18px;
  overflow: hidden;

  position: relative;

    .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255,255,255,0.85);
    border: none;
    border-radius: 50%;
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;
    line-height: 0;
    color: #1f2937;

    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    transition: transform 0.2s ease, background 0.2s ease;
    }

    .arrow:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    }

    .arrow.left {
    left: 15px;
    }

    .arrow.right {
    right: 15px;
    }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
  padding: 2rem;

  color: #1f2937;
`;

export const BookImage = styled.img`
  width: auto;
  height: 450px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
`;

export const SlideContent = styled.div`
  max-width: 500px;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SlideTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: var(--font-main);
  color: #1f2937;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;

  background-color: ${p => (p.active ? "#111" : "#ccc")};
  cursor: pointer;

  transition: 0.25s;
`;