import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LeftSection,
  NavMenu,
  SearchWrapper,
  SearchInput,
  IconsWrapper,
  IconBox
} from "./style";

const Header: React.FC = () => {
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
      <NavMenu>
        <li><Link to="/bookscatalog">Catálogo</Link></li>
        <li><Link to="/">Mais Procurados</Link></li>
        <li><Link to="/">Gêneros</Link></li>
        <li><Link to="/">Autores</Link></li>
        <li><Link to="/">Promoções</Link></li>
      </NavMenu>
      {/* Search + ícones */}
      <IconsWrapper>
        <SearchWrapper>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5
              18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>

          <SearchInput type="text" placeholder="Search" />
        </SearchWrapper>

        {/* Botão Favoritos */}
        <IconBox>
          <img src="/assets/icons/favorites.png" />
        </IconBox>

        {/* Botão Carrinho */}
        <IconBox>
          <img src="/assets/icons/carrinho.png" />
        </IconBox>
        <IconBox>
          <img src="/assets/icons/perfil.png" />
        </IconBox>
      </IconsWrapper>
    </HeaderContainer>
  );
};

export { Header };