// components/Navigation/Navigation.styles.js
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-width: 60%;
    background: transparent linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(18.6px);
  -webkit-backdrop-filter: blur(18.6px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    padding: 1rem 0;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s;
  border-bottom: 2px solid transparent;
  &:hover {
  border-bottom: 2px solid #7F00FF;
    color: #7F00FF;
  }
`;

export const DropdownTrigger = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s;
  border-bottom: 2px solid transparent;
  // position: relative;

  &:hover {
  
  border-bottom: 2px solid #7F00FF;
    color:  #7F00FF;
  }

  &::after {
    content: '▼';
    font-size: 15px;
    margin-left: 0.5rem;
    display: inline-block;
    transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.3s;
  }
`;