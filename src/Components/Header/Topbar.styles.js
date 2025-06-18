// components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #070000;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

export const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const LoginButton = styled.button`
  background-color: #ac3502;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  `;