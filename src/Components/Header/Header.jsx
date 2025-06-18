// src/Components/Header/Header.jsx
import React, { useState } from 'react';
import { HeaderContainer, Logo, NavToggle } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import { 
  DropdownContainer,  // Import directly as DropdownContainer
  DropdownItem,
  DropdownSection,
  DropdownTitle 
} from './DropdownMenu.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <HeaderContainer>
      <Logo>SeenaDSavior</Logo>
      <NavToggle onClick={toggleMenu}>☰</NavToggle>
      <Navigation 
        isMenuOpen={isMenuOpen} 
        activeDropdown={activeDropdown} 
        handleDropdown={handleDropdown} 
      />
      {activeDropdown && (
        <DropdownContainer 
          type={activeDropdown} 
          closeDropdown={() => setActiveDropdown(null)} 
        />
      )}
    </HeaderContainer>
  );
};

export default Header;