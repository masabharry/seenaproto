// src/Components/Header/DropdownMenu.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const DropdownContainer = styled(motion.div)`
  background: transparent linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(18.6px);
  -webkit-backdrop-filter: blur(18.6px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 90%;
  z-index: 1000;
  will-change: opacity, transform, backdrop-filter;
  transition: backdrop-filter 0.3s ease;

  @media (max-width: 992px) {
    min-width: 60%;
  }
`;



export const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownTitle = styled.h3`
  font-size: 1.1rem;
  color: #3498db;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

export const DropdownItem = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 0;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: #7F00FF;
    transform: translateX(5px);
  }
`;
