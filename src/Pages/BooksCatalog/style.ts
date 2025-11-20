import styled from "styled-components";

export const BooksWrapper = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 2rem;
    color: #111;
    font-family: 'Times New Roman', sans-serif;
    font-weight: bold;
    margin-left: 0.3rem;
  }
`;

export const BooksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;
