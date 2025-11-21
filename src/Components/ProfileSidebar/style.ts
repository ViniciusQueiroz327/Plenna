import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #cfdbe7;
  background: #ffffff;

  @media (prefers-color-scheme: dark) {
    background: #f3f4f6;
    border-color: #364a5f;
  }
`;

export const UserBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: url("/assets/icons/perfil.png") center/cover;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    line-height: 1.2;

    strong {
      font-size: 1rem;
      color: #1f404e;
      font-family: "Trebuchet MS", sans-serif;
    }

    span {
      font-size: 0.85rem;
      color: #6b7280;
      font-family: "Trebuchet MS", sans-serif;
    }
  }
`;


export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #1f404e;
  font-family: "Trebuchet MS", sans-serif;

  img {
    width: 20px;
  }

  div {
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: #ffffff;
    }

    &.active {
      border: 1px solid #cfdbe7;
      font-weight: bold;
    }
  }
`;

export const Logout = styled.div`
  margin-top: auto;
  padding: 0.7rem 1rem;
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  color: #e63946;
  border-radius: 0.5rem;
  font-weight: bold;
  font-family: "Trebuchet MS", sans-serif;

  img {
    width: 20px;
  }

  &:hover {
    background: #e6394620;
  }
`;
