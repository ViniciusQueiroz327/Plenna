import React, { useState } from "react";
import { LoginCard, TitleBox, SubmitButton, LinksBox } from "./style";
import { InputField } from "../../Components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { setLoggedUser, User } from "../../auth";

const LoginBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://plenna-api.onrender.com/api/user/email/${email}`
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const user: User & { senha: string } = await response.json();

      if (user.senha !== senha) {
        alert("Senha incorreta");
        return;
      }

      // Login bem-sucedido
      console.log("Login realizado:", user);
      alert(`Bem-vindo, ${user.nome}!`);

      // Salvar no localStorage
      setLoggedUser({ id: user.id, nome: user.nome, email: user.email });

      // Redirecionar
      navigate("/home");
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Falha ao realizar login");
    } finally {
      setLoading(false);
    }
  };

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Senha"
        placeholder="Insira sua senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <SubmitButton onClick={handleLogin} disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </SubmitButton>

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