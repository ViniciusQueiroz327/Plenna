import styled from "styled-components";

export const RegisterCard = styled.div`
  border: 1px solid #364a5f;
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem 2rem;
  background-color: #f3f4f6;
  border-radius: 20px
`;

export const TitleBox = styled.div`
  text-align: center;

  h1 {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1f404e;
  }

  p {
    color: #6b7280;
    font-family: var(--font-main);
  }
`;

export const SubmitButton = styled.button`
  height: 48px;
  background: #137fec;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;
  font-family: var(--font-title);

  &:hover {
    background: #0f6ec9;
  }
`;

export const LinksBox = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: #6b7280;
  }

  a {
    color: #137fec;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;