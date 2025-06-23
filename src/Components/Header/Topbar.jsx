// src/Components/Header/Header.jsx
import React, { useState } from "react";
import { HeaderContainer, InnerDiv, Logo, LoginButton, InnerDivLink } from "./Topbar.styles";
import { useAnimation, useScroll, motion } from "framer-motion";
import { useEffect } from "react";
import mainlogo from "../../Assets/a1.png"
import loginLink from "../Login/Login"
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const controls = useAnimation();
    const { scrollY } = useScroll();
  
    useEffect(() => {
      return scrollY.onChange((latest) => {
        if (latest > 60) {
          controls.start({
            background: "#070000",
            
            transition: { duration: 0.2, ease: "easeOut" },
          });
        } else {
          controls.start({
            background: "transparent",
           
            transition: { duration: 0.2, ease: "easeOut" },
          });
        }
      });
    }, [scrollY, controls]);

  const handleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <HeaderContainer
     as={motion.header}
          animate={controls}
          initial={{ background: "transparent" }}
    >
     
      <InnerDivLink to={'/'}>
         
        <img src={mainlogo} alt="Logo" height={40} width={40} />
        <Logo>SeenaDsavior</Logo>
      </InnerDivLink>
      <InnerDiv>
        <Link to={"/login"}>
          <LoginButton >Login/Register</LoginButton>
        </Link>
           
      
      </InnerDiv>
    </HeaderContainer>
  );
};

export default Topbar;
