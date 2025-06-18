// components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 80px;
  background-color: #E0D7D7;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
`;

export const NavToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  color: #ac3502;

  @media (max-width: 768px) {
    display: block;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchBar = styled.div`
  width:300px;
  height:45px;
  border:#938E98;
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;
  border-radius:70px;
  background-color: #fff;

`

export const Search = styled.input`
  width:300px;
  height:45px;
  border: none;
  padding: 0px 5px;
  background-color: transparent;
    border: 0px solid white;
    outline: none;
  &:hover{
   background-color: transparent;
    border: 0px solid white;
    outline: none;
  }
`