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

export const IconBox = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid #d1d5db;
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
