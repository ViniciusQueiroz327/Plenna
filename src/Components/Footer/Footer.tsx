import React from "react";
import { FooterContainer, FooterContent, FooterLinks, FooterCopy } from "./style";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopy>© 2025 Plenna. Todos os direitos reservados.</FooterCopy>

        <FooterLinks>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Serviço</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};