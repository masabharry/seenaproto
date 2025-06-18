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
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  color: #AC3502;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s;
  &:hover {
    color: #3498db;
  }
`;

export const DropdownTrigger = styled.button`
  background: none;
  border: none;
  color: #AC3502;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: #3498db;
  }

  &::after {
    content: '▼';
    font-size: 0.6rem;
    margin-left: 0.5rem;
    display: inline-block;
    transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.3s;
  }
`;