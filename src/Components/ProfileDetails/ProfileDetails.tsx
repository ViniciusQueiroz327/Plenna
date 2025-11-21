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

const ProfileDetails: React.FC = () => {
  return (
    <>
      <Title>Detalhes do Perfil</Title>
      <Subtitle>Atualize suas informações pessoais abaixo.</Subtitle>

      <Section>
        <InputGroup>
          <InputLabel>Nome Completo</InputLabel>
          <Input value="Vinicius Queiroz" />
        </InputGroup>

        <InputGroup>
          <InputLabel>E-mail</InputLabel>
          <Input value="gm.gb@outlook.com" />
        </InputGroup>

        <InputGroup>
          <InputLabel>Telefone</InputLabel>
          <Input placeholder="(11) 96091-0276" />
        </InputGroup>
      </Section>

      <Actions>
        <button className="cancel">Cancelar</button>
        <button className="save">Salvar Alterações</button>
      </Actions>
    </>
  );
};

export { ProfileDetails };