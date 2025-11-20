import React from "react";
import { LoginCard, TitleBox, SubmitButton, LinksBox } from "./style";
import { InputField } from "../../Components/InputField/InputField";
import { Link } from "react-router-dom";

const LoginBox: React.FC = () => {
  return (
    <LoginCard>
      <TitleBox>
        <h1>Bem-Vindo de Volta!</h1>
        <p>Entre para continuar sua jornada literária</p>
      </TitleBox>

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

      <SubmitButton><Link to="/home">Entrar</Link></SubmitButton>

      <LinksBox>
        <Link to="/">Esqueceu a senha?</Link>
        <p>
          Não tem uma conta? <Link to="/register">Create Account</Link>
        </p>
      </LinksBox>
    </LoginCard>
  );
};

export { LoginBox };