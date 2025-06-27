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
  { name: "Seven Pillers", type: "Actors", dropdown: true },
  { name: "SDS Community", type: "Community", dropdown: true },
  { name: "SDS Packages", href: "/packages", dropdown: false },
  { name: "Video Guide", href: "/video-guide", dropdown: false },
  { name: "About Us", type: "About", dropdown: true },
  { name: "Contact Us", href: "/contact-us", dropdown: false },
];

const Navigation = ({
  isMenuOpen,
  activeDropdown,
  handleDropdown,
  isTouchDevice,
}) => {
  return (
    <NavList isMenuOpen={isMenuOpen}>
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          onMouseEnter={
            !isTouchDevice && item.dropdown
              ? () => handleDropdown(item.type)
              : undefined
          }
          data-dropdown
        >
          {item.dropdown ? (
            <DropdownTrigger
              onClick={
                isTouchDevice ? () => handleDropdown(item.type) : undefined
              }
              isActive={activeDropdown === item.type}
              data-trigger={item.type}
              data-dropdown
            >
              {item.name}
            </DropdownTrigger>
          ) : (
            <NavLink as={Link} to={item.href || "#"}>
              {item.name}
            </NavLink>
          )}
        </NavItem>
      ))}
    </NavList>
  );
};

export default Navigation;
