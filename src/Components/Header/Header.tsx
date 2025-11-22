import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LeftSection,
  NavMenu,
  SearchWrapper,
  SearchInput,
  IconsWrapper,
  IconBox,
  ProfileWrapper,
  ProfileIcon,
  DropdownMenu,
  DropdownItem
} from "./style";
import { isLoggedIn, logout } from "../../auth";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [logged, setLogged] = React.useState<boolean>(isLoggedIn());
  const menuRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const syncLogin = () => setLogged(isLoggedIn());
    window.addEventListener("storage", syncLogin);

    return () => window.removeEventListener("storage", syncLogin);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);  // 👈 Fechar menu quando clicar fora
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <LeftSection>
        <Link to="/home">
          <img src="/assets/logo.png" />
        </Link>
        <h3>Plenna</h3>
      </LeftSection>

      <NavMenu>
        <li><Link to="/bookscatalog">Catálogo</Link></li>
        {/* <li><Link to="/">Mais Procurados</Link></li> */}
        {/* <li><Link to="/">Gêneros</Link></li> */}
        <li><Link to="/">Autores</Link></li>
        <li><Link to="/donate">Doar</Link></li>
      </NavMenu>

      <IconsWrapper>
        <SearchWrapper>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5
              18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>

          <SearchInput type="text" placeholder="Search" />
        </SearchWrapper>

        <IconBox className="deactivated">
          <img src="/assets/icons/favorites.png" className="deactivatedImg"/>
        </IconBox>

        <IconBox className="deactivated">
          <img src="/assets/icons/carrinho.png" className="deactivatedImg"/>
        </IconBox>

        <div ref={menuRef}>
          <ProfileWrapper
            onClick={() => {
              if (!logged) {
                window.location.href = "/login";
                return;
              }
              setOpenMenu((p) => !p);
            }}
          >
            <IconBox logged={logged}>
              <ProfileIcon
                src="/assets/icons/perfil.png"
                logged={logged}
              />
            </IconBox>

            {openMenu && logged && (
              <DropdownMenu>
                <Link to="/userprofile" style={{ textDecoration: "none" }}>
                  <DropdownItem>Perfil</DropdownItem>
                </Link>

                <DropdownItem
                  style={{ color: "red" }}
                  onClick={() => {
                    logout();
                    setLogged(false);
                    window.location.href = "/home";
                  }}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            )}
          </ProfileWrapper>
        </div>
      </IconsWrapper>
    </HeaderContainer>
  );
};

export { Header };