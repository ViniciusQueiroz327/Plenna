import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.5rem 1rem;
  background: #f3f4f6;
  border-top: 1px solid #e5e7eb;
  margin-top: 3rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterCopy = styled.p`
  font-size: 1rem;
  color: #475569;
  font-family: var(--font-main);
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.1rem;
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    font-family: var(--font-main);
    transition: 0.2s ease;

    &:hover {
      color: #0376a7ff;
    }
  }

  @media (max-width: 700px) {
    gap: 1rem;
  }
`;