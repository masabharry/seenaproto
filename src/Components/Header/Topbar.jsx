// src/Components/Header/Header.jsx
import React, { useState } from "react";
import { HeaderContainer, InnerDiv, Logo, LoginButton } from "./Topbar.styles";
import Navigation from "../Navigation/Navigation";
import logo from "./Logo.png";


const Topbar = () => {
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
      <InnerDiv>
        <img src={logo} alt="Logo" height={40} width={40} />
        <Logo>SeenaDSavior</Logo>
      </InnerDiv>
      <InnerDiv>
           <LoginButton>Login/Register</LoginButton>
      
      </InnerDiv>
    </HeaderContainer>
  );
};

export default Topbar;
