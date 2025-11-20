import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterContent, FooterLinks, FooterCopy } from "./style";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopy>© 2025 Plenna. Todos os direitos reservados.</FooterCopy>

        <FooterLinks>
          <Link to="/about">Sobre nós</Link>
          <Link to="">Contato</Link>
          <Link to="">Política de Privacidade</Link>
          <Link to="">Termos de Serviço</Link>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};