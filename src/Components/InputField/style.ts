import styled from "styled-components";

export const FieldContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.p`
  font-size: 1rem;
  color: #1f404e;
  font-family: "Trebuchet MS", sans-serif;
`;

export const Input = styled.input`
  height: 35px;
  padding: 0 15px;
  font-size: 0.8rem;
  font-family: 'Times New Roman', sans-serif;

  border: 1px solid #cfdbe7;
  background: white;
  border-radius: 8px;
  color: #1f404e;

  &:focus {
    border-color: #137fec;
    outline: none;
    box-shadow: 0 0 0 3px rgba(19, 127, 236, 0.2);
  }
`;