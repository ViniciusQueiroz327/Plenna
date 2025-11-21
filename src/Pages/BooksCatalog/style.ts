import styled from "styled-components";

export const BooksWrapper = styled.section`
  width: 100%;
  // max-width: 1500px;
  margin: 2rem auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    color: #111;
    font-size: var(--font-size-h2);
    font-family: var(--font-title);
    font-weight: bold;
    margin-left: 2.5rem;
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
