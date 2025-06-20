// src/Components/Header/Header.jsx
import React, { useEffect } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useAnimation, motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { HeaderContainer, SearchBar, NavToggle, SearchInput } from "./Header.styles";
import Navigation from "../Navigation/Navigation";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 60) {
        controls.start({
          background: "#070000",
          
          transition: { duration: 0.4, ease: "easeOut" },
        });
      } else {
        controls.start({
          background: "transparent",
         
          transition: { duration: 0.4, ease: "easeOut" },
        });
      }
    });
  }, [scrollY, controls]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (item) =>
    setActiveDropdown(activeDropdown === item ? null : item);

  return (
    <HeaderContainer
      as={motion.header}
      animate={controls}
      initial={{ background: "transparent" }}
    >
      <NavToggle onClick={toggleMenu}>☰</NavToggle>
      <Navigation
        isMenuOpen={isMenuOpen}
        activeDropdown={activeDropdown}
        handleDropdown={handleDropdown}
      />
      {activeDropdown && (
        <DropdownMenu
          type={activeDropdown}
          closeDropdown={() => setActiveDropdown(null)}
        />
      )}
      <SearchBar>
        <FaBars color="#7F00FF"/>
        <SearchInput
          type="text"
          placeholder="Hinted Search Text"
          onFocus={() => setActiveDropdown("search")}
          onBlur={() => setActiveDropdown(null)}
        />
        <FaSearch color="#7F00FF" />
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;
