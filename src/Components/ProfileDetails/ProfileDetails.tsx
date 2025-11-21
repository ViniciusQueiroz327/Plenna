import React, { useEffect, useState } from "react";
import {
  Title,
  Subtitle,
  Section,
  InputGroup,
  InputLabel,
  Input,
  Actions
} from "./style";

import { getLoggedUser } from "../../auth";

const ProfileDetails: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const loadUserData = () => {
    const loggedUser = getLoggedUser();
    if (!loggedUser) return;

    fetch(`https://plenna-api.onrender.com/api/user/email/${loggedUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setNome(data.nome);
        setEmail(data.email);
        setTelefone(data.telefone || "");
      })
      .catch((err) => console.error("Erro ao buscar usuário:", err));
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleSave = () => {
    if (!id) {
      console.error("ID do usuário não carregado.");
      return;
    }

    fetch(`https://plenna-api.onrender.com/api/user/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        telefone
      })
    })
      .then(async (res) => {
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg);
        }
        return res.json().catch(() => null);
      })
      .then(() => {
        alert("Informações atualizadas com sucesso!");
        loadUserData();
      })
      .catch((err) => console.error("Erro ao atualizar usuário:", err));
  };

  const handleCancel = () => {
    loadUserData();
    alert("Alterações descartadas.");
  };

  return (
    <>
      <Title>Detalhes do Perfil</Title>
      <Subtitle>Atualize suas informações pessoais abaixo.</Subtitle>

      <Section>
        <InputGroup>
          <InputLabel>Nome Completo</InputLabel>
          <Input value={nome} onChange={(e) => setNome(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <InputLabel>E-mail</InputLabel>
          <Input value={email} disabled />
        </InputGroup>

        <InputGroup>
          <InputLabel>Telefone</InputLabel>
          <Input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </InputGroup>
      </Section>

      <Actions>
        <button className="cancel" onClick={handleCancel}>
          Cancelar
        </button>

        <button className="save" onClick={handleSave}>
          Salvar Alterações
        </button>
      </Actions>
    </>
  );
};

export { ProfileDetails };