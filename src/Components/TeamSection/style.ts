import styled from "styled-components";

export const TeamContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;

  h2 {
    font-size: 2.5rem;
    color: #1f404e;
    margin-bottom: 2rem;
    text-align: center;
    font-family: var(--font-title);
  }
`;

export const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const TeamCard = styled.div`
  text-align: center;

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100%;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;
    color: #1f404e;
    font-family: var(--font-title);
  }

  p {
    font-size: 1rem;
    color: #6b7280;
    font-family: var(--font-main);
  }
`;
