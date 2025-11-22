import React, { useState } from "react";
import { RegisterCard, TitleBox, SubmitButton, LinksBox } from "./style";
import { InputField } from "../../Components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";

interface UserForm {
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
}

const RegisterBox: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<UserForm>({
    nome: "",
    email: "",
    endereco: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof UserForm, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://plenna-api.onrender.com/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          endereco: form.endereco,
          telefone: form.telefone,
          senha: form.senha,
        }),
      });

      if (!response.ok) {
        let errorMessage = `Erro ao registrar usuário (status ${response.status})`;
        try {
          const errorData = await response.json();
          if (errorData && errorData.message) errorMessage = errorData.message;
        } catch {}
        throw new Error(errorMessage);
      }

      let data;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      console.log("Usuário criado:", data);
      alert("Registro realizado com sucesso!");

      setForm({
        nome: "",
        email: "",
        endereco: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
      });

      // 👉 Redireciona para login após sucesso
      navigate("/login");

    } catch (error: any) {
      console.error(error);
      alert(error.message || "Falha ao registrar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterCard>
      <TitleBox>
        <h1>Novo por Aqui?</h1>
        <p>Desbloqueie um mundo de histórias</p>
      </TitleBox>

      <InputField
        label="Nome Completo"
        placeholder="Insira seu nome completo"
        type="text"
        value={form.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
      />

      <InputField
        label="E-mail"
        placeholder="Insira seu e-mail"
        type="email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <InputField
        label="Endereço"
        placeholder="Insira seu endereço"
        type="text"
        value={form.endereco}
        onChange={(e) => handleChange("endereco", e.target.value)}
      />

      <InputField
        label="Telefone"
        placeholder="Insira seu número de telefone"
        type="phone"
        value={form.telefone}
        onChange={(e) => handleChange("telefone", e.target.value)}
      />

      <InputField
        label="Senha"
        placeholder="Insira sua senha"
        type="password"
        value={form.senha}
        onChange={(e) => handleChange("senha", e.target.value)}
      />

      <InputField
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        type="password"
        value={form.confirmarSenha}
        onChange={(e) => handleChange("confirmarSenha", e.target.value)}
      />

      <SubmitButton onClick={handleSubmit} disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </SubmitButton>

      <LinksBox>
        <p>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </LinksBox>
    </RegisterCard>
  );
};

export { RegisterBox };