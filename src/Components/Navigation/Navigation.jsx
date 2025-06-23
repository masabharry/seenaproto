// components/Navigation/Navigation.jsx
import React from "react";
import {
  NavList,
  NavItem,
  NavLink,
  DropdownTrigger,
} from "./Navigation.styles";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Our Product", type: "Product", dropdown: true },
  { name: "About Us", type: "About", dropdown: true },
  { name: "7 Es", type: "Actors", dropdown: true },
  { name: "SDS Community", type: "Community", dropdown: true },
  { name: "SDS Packages", href: "/packages", dropdown: false },
];

const Navigation = ({ isMenuOpen, activeDropdown, handleDropdown }) => {
  return (
    <NavList isMenuOpen={isMenuOpen}>
      {navItems.map((item) => (
        <NavItem key={item.name}>
          {item.dropdown ? (
            <DropdownTrigger
              onClick={() => handleDropdown(item.type)}
              isActive={activeDropdown === item.type}
              data-trigger={item.type}
            >
              {item.name}
            </DropdownTrigger>
          ) : (
            <NavLink as={Link} to={item.href || "#"}>{item.name}</NavLink>
          )}
        </NavItem>
      ))}
    </NavList>
  );
};

export default Navigation;
