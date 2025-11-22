import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  background: #ffffffff;
  *{
    font-family: var(--font-main);
  }

  @media (prefers-color-scheme: dark) {
    background: #ffffffff;
  }
`;

export const SidebarContainer = styled.aside`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const Layout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentArea = styled.section`
  flex: 1;
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #364a5f;

  @media (prefers-color-scheme: dark) {
    background: #f3f4f6;
  }
`;
