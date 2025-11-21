import React from "react";
import { SidebarContainer, UserBox, Menu, Logout } from "./style";

interface ProfileSidebarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ setActiveComponent, activeComponent }) => {
  return (
    <SidebarContainer>
      <UserBox>
        <div className="avatar" />
        <div className="info">
          <strong>Vinicius Queiroz</strong>
          <span>gm.gb@outlook.com</span>
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

      <Logout>
        <img src="/assets/icons/logout.png" alt="" />
        Sair
      </Logout>
    </SidebarContainer>
  );
};

export { ProfileSidebar };