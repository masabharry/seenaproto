// components/Navigation/Navigation.jsx
import React from 'react';
import { NavList, NavItem, NavLink, DropdownTrigger } from './Navigation.styles';

const navItems = [
  { name: 'Product', dropdown: true },
  { name: 'About', dropdown: true },
  { name: 'Actors', dropdown: true },
  { name: 'Community & Resources', dropdown: false },
  { name: 'SDS Packages', dropdown: false },
];


const Navigation = ({ isMenuOpen, activeDropdown, handleDropdown }) => {
  return (
    
    <NavList isMenuOpen={isMenuOpen}>
      {navItems.map((item) => (
        <NavItem key={item.name}>
          {item.dropdown ? (
            <DropdownTrigger 
              onClick={() => handleDropdown(item.name)}
              isActive={activeDropdown === item.name}
              data-trigger={item.name} 
            >
              {item.name}
            </DropdownTrigger>
          ) : (
            <NavLink href="#">{item.name}</NavLink>
          )}
        </NavItem>
      ))}
    </NavList>
  );
};

export default Navigation;