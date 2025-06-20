// components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 80px;
  width: 100%;
  position: fixed;
  background: transparent ;
  top: 60px;
  left: 0;
  z-index: 999;
  borrder-radius: 10px;
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
  color: #7F00FF;

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
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;
  
  background-color: transparent;
  // border-bottom:  1px solid #7F00FF;
  box-shadow: 0 0 10px #7F00FF;
  // // border-radius: 5px;
  border-radius:70px;

  @media (max-width: 768px) {
      width: 250px;
      height: 35px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: #7F00FF;
  background-color: transparent;
  &::placeholder {
    color: #aaa;
  }
`;