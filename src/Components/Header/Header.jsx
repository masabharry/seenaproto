import React, { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useScroll } from "framer-motion";
import {
  HeaderContainer,
  SearchBar,
  NavToggle,
  SearchInput,
} from "./Header.styles";
import Navigation from "../Navigation/Navigation";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      controls.start({
        background: latest > 60 ? "#070000" : "transparent",
        transition: { duration: 0.4, ease: "easeOut" },
      });
    });
  }, [scrollY, controls]);

  // 👉 Close dropdown on outside touch (only on touch devices)
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest("[data-dropdown]")) {
        setActiveDropdown(null);
      }
    };

    if (isTouchDevice) {
      document.addEventListener("click", closeDropdown);
    }
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isTouchDevice]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (item) => {
    if (isTouchDevice) {
      setActiveDropdown((prev) => (prev === item ? null : item));
    } else {
      setActiveDropdown(item);
    }
  };

    // 👇 Close dropdown on scroll if mouse is not over nav or dropdown
  useEffect(() => {
    const handleScroll = () => {
      const isHoveringDropdown = document.querySelector(":hover[data-dropdown]");
      const isHoveringTrigger = document.querySelector(":hover[data-trigger]");

      if (!isHoveringDropdown && !isHoveringTrigger) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
        isTouchDevice={isTouchDevice}
      />
      {activeDropdown && (
        <DropdownMenu
          type={activeDropdown}
          closeDropdown={() => setActiveDropdown(null)}
        />
      )}
      <SearchBar>
        {/* <FaBars color="#7F00FF" /> */}
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
