import React from "react";
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
// import { isLoggedIn, logout, getLoggedUser } from "../../auth";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [logged, setLogged] = React.useState<boolean>(isLoggedIn());

  React.useEffect(() => {
    // Reage caso outro componente altere login.
    const syncLogin = () => setLogged(isLoggedIn());
    window.addEventListener("storage", syncLogin);

    return () => window.removeEventListener("storage", syncLogin);
  }, []);

  return (
    <HeaderContainer>
      <LeftSection>
        <Link to="/home">
          <img src="/assets/logo.png" />
        </Link>
        <h1>Plenna</h1>
      </LeftSection>

      <NavMenu>
        <li><Link to="/bookscatalog">Catálogo</Link></li>
        <li><Link to="/">Mais Procurados</Link></li>
        <li><Link to="/">Gêneros</Link></li>
        <li><Link to="/">Autores</Link></li>
        <li><Link to="/">Promoções</Link></li>
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

        <IconBox>
          <img src="/assets/icons/favorites.png" />
        </IconBox>

        <IconBox>
          <img src="/assets/icons/carrinho.png" />
        </IconBox>

        <ProfileWrapper>
          <IconBox logged={logged}>
            {!logged ? (
              <Link to="/login">
                <ProfileIcon src="/assets/icons/perfil.png" logged={false} />
              </Link>
            ) : (
              <>
                <ProfileIcon
                  src="/assets/icons/perfil.png"
                  logged={true}
                  onClick={() => setOpenMenu((p) => !p)}
                />

                {openMenu && (
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/userprofile">Perfil</Link>
                    </DropdownItem>

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
              </>
            )}
          </IconBox>
        </ProfileWrapper>
      </IconsWrapper>
    </HeaderContainer>
  );
};

export { Header };