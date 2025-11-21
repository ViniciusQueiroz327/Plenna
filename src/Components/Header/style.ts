import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 70px;
  }

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    color: #1f404e;
    font-family: "Trebuchet MS", sans-serif;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  li a {
    font-size: 1.3rem;
    color: #1f2937;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;
    font-family: 'Times New Roman', sans-serif;

    &:hover {
      color: #1f404e;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 0.75rem;
  height: 42px;
  width: 260px;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: #6b7280;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 0.95rem;
  color: #374151;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 25px;
  }
`;

interface IconBoxProps {
  logged?: boolean;
}

export const IconBox = styled.div<IconBoxProps>`
  width: 42px;
  height: 42px;
  border: ${({ logged }) => (logged ? "2px solid green" : "1px solid #d1d5db")};
  border-radius: 10px;

  display: grid;
  place-items: center;

  cursor: pointer;
  transition: 0.2s;

  svg {
    width: 20px;
    height: 20px;
    color: #374151;
  }

  &:hover {
    background: #e5e7eb;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ProfileIcon = styled.img<{ logged: boolean }>`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;

  border: ${(props) => (props.logged ? "2px solid #1DB954" : "none")};
  padding: 2px;
  transition: 0.2s;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 52px;
  right: 0;

  width: 170px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
  padding: 8px 0;
  z-index: 20;

  animation: fadeIn 0.18s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 18px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Arial", sans-serif;

  &:hover {
    background: #f3f4f6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;