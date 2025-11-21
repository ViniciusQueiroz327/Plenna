import React from "react";
import {
  Title,
  Subtitle,
  Section,
  InputGroup,
  InputLabel,
  Input,
  Actions
} from "./style";

const BookRegister: React.FC = () => {
  return (
    <>
      <Title>Registrar Livro</Title>
      <Subtitle>Insira as informações do livro abaixo.</Subtitle>

      <Section>
        <InputGroup>
          <InputLabel>Título</InputLabel>
          <Input value="" />
        </InputGroup>

        <InputGroup>
          <InputLabel>Autor</InputLabel>
          <Input value="" />
        </InputGroup>

        <InputGroup>
          <InputLabel>Editora</InputLabel>
          <Input placeholder="" />
        </InputGroup>

        <InputGroup>
          <InputLabel>Condição</InputLabel>
          <Input placeholder="" />
        </InputGroup>
      </Section>

      <Actions>
        <button className="cancel">Cancelar</button>
        <button className="save">Registrar Livro</button>
      </Actions>
    </>
  );
};

export { BookRegister };