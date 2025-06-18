// src/Components/Header/Header.jsx
import React, { useState } from 'react';
import { HeaderContainer, SearchBar, NavToggle } from './Header.styles';
import Navigation from '../Navigation/Navigation';
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
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
      <SearchBar>
<IoIosMenu />
          <FaSearch />
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;