import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 2rem;
  font-family: var(--font-title);
  color: #374151;
`;

export const PageHeading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #1f404e;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: var(--font-title);
`;

export const MetaText = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 3rem;
  font-family: var(--font-main);
`;

export const Section = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f404e;
  margin-bottom: 0.8rem;
  font-family: var(--font-title);
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1rem;
  font-family: var(--font-main);

  a {
    color: #137fec;
    font-weight: 600;
    text-decoration: none;
    font-family: var(--font-main);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.4rem;
  list-style: disc;

  li {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: var(--font-main);
    color: #374151;
  }
`;