import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LeftSection,
} from "./style";

const FormsHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        {/* Logo + Nome */}
        <Link to="/home">
          <img src="/assets/logo.png" />
        </Link>
        <h1>Plenna</h1>
        {/* Menu de navegação */}
        {/* <Navbar /> */}
      </LeftSection>
    </HeaderContainer>
  );
};

export { FormsHeader };