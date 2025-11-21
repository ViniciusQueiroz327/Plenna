import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 70px;
  }

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    color: #1f404e;
    font-family: var(--font-title);
  }
`;