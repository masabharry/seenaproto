// src/Components/Header/DropdownMenu.styles.js
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 8px 8px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  min-width: 800px;
  z-index: 1000;

  @media (max-width: 992px) {
    min-width: 600px;
  }

  @media (max-width: 768px) {
    position: static;
    min-width: 100%;
    box-shadow: none;
    border-radius: 0;
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownTitle = styled.h3`
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

export const DropdownItem = styled.a`
  text-decoration: none;
  color: #7f8c8d;
  padding: 0.5rem 0;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #3498db;
    transform: translateX(5px);
  }
`;