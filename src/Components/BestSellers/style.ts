import styled from "styled-components";

export const BestSellersWrapper = styled.section`
  width: 100%;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: var(--font-size-h2);
    color: #111;
    font-family: var(--font-title);
    font-weight: bold;
    margin-left: 2.5rem;
  }
`;

export const BestSellersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;
