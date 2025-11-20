import React from "react";
import { LoginCard, TitleBox, SubmitButton, LinksBox } from "./style";
import { InputField } from "../../Components/InputField/InputField";
import { Link } from "react-router-dom";

const RegisterBox: React.FC = () => {
  return (
    <LoginCard>
      <TitleBox>
        <h1>Novo por Aqui?</h1>
        <p>Desbloqueie um mundo de histórias</p>
      </TitleBox>

      <InputField
        label="Nome Completo"
        placeholder="Insira seu nome completo"
        type="text"
      />

      <InputField
        label="E-mail"
        placeholder="Insira seu e-mail"
        type="email"
      />

      <InputField
        label="Senha"
        placeholder="Insira sua senha"
        type="password"
      />
      
      <InputField
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        type="password"
      />

      <SubmitButton><Link to="/home">Registrar</Link></SubmitButton>

      <LinksBox>
        <p>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </LinksBox>
    </LoginCard>
  );
};

export { RegisterBox };