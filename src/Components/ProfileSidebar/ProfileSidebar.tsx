import React, { useEffect, useState } from "react";
import { SidebarContainer, UserBox, Menu, Logout } from "./style";
import { getLoggedUser, logout } from "../../auth";
import { useNavigate } from "react-router-dom";

interface ProfileSidebarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  setActiveComponent,
  activeComponent
}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = getLoggedUser();
    if (!loggedUser) return;

    const userEmail = loggedUser.email;

    fetch(`https://plenna-api.onrender.com/api/user/email/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setNome(data.nome);
        setEmail(data.email);
      })
      .catch((err) => console.error("Erro ao carregar usuário:", err));
  }, []);

  return (
    <SidebarContainer>
      <UserBox>
        <div className="avatar" />
        <div className="info">
          <strong>{nome || "Desconhecido"}</strong>
          <span>{email || "example@email.com"}</span>
        </div>
      </UserBox>

      <Menu>
        {[
          { key: "profile-details", label: "Detalhes do Perfil", icon: "/assets/icons/perfil.png" },
          { key: "orders", label: "Histórico de Pedidos", icon: "/assets/icons/order.png" },
          { key: "register-book", label: "Registrar Livro", icon: "/assets/icons/bookRegister.png" },
          { key: "addresses", label: "Endereços Salvos", icon: "/assets/icons/location.png" },
          { key: "settings", label: "Configurações", icon: "/assets/icons/setting.png" },
        ].map((item) => (
          <div
            key={item.key}
            className={activeComponent === item.key ? "active" : ""}
            onClick={() => setActiveComponent(item.key)}
          >
            <img src={item.icon} alt="" />
            {item.label}
          </div>
        ))}
      </Menu>

      <Logout
        onClick={() => {
          logout();
          navigate("/home");
        }}
      >
        <img src="/assets/icons/logout.png" alt="" />
        Sair
      </Logout>
    </SidebarContainer>
  );
};

export { ProfileSidebar };
