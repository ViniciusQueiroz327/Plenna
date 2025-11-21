import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1f404e;
  font-family: var(--font-title);
`;

export const Subtitle = styled.p`
  color: #374151;
  border-bottom: 1px solid #cfdbe7;
  padding-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    border-color: #364a5f;
  }
`;

export const Section = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  height: 45px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #cfdbe7;
  outline: none;
  color: #374151;
  font-family: var(--font-title);

  &:focus {
    border-color: #137fec;
    box-shadow: 0 0 0 3px #137fec33;
  }

  @media (prefers-color-scheme: dark) {
    background: #ffffffff;
    border-color: #364a5f;
  }
`;

export const Actions = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  display: flex;
  gap: 1rem;
  border-top: 1px solid #cfdbe7;

  @media (prefers-color-scheme: dark) {
    border-color: #364a5f;
  }

  .cancel {
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 1px solid #cfdbe7;
    cursor: pointer;
    background: #e63946;

    &:hover {
      background: #b4202dff;
    }
  }

  .save {
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    background: #137fec;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      background: #137edc;
    }
  }
`;