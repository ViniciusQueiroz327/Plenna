import styled from "styled-components";

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
  transition: 0.25s ease;
  padding: 1rem;

  border-radius: 14px;

  &:hover {
    transform: translateY(-6px);
    background: #f9fafb;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  }
`;

export const BookImage = styled.img`
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);

  transition: 0.25s ease;

  ${BookCardContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const BookTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1f2937;
  text-align: center;
  font-family: 'Times New Roman', sans-serif;

  max-width: 180px;
  line-height: 1.3;
`;