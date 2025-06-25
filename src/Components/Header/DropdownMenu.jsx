import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import dropdownContent from "./DropdownContent";
import {
  DropdownContainer,
  DropdownItem,
  DropdownSection,
} from "./DropdownMenu.styles";
import { Link } from "react-router-dom";

const DropdownMenu = ({ type, closeDropdown }) => {
  const content = dropdownContent[type];
  const dropdownRef = useRef(null);
  const [style, setStyle] = useState(null);

  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
  closeDropdown(); // remove the timeout — close instantly
};


  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const triggerEl = document.querySelector(`[data-trigger="${type}"]`);
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect();
      setStyle({
        top: rect.bottom + 5 + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [type]);

  if (!content || !style) return null;

  return ReactDOM.createPortal(
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: `${style.top}px`,
        left: `${style.left}px`,
        zIndex: 1000,
      }}
      data-dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownContainer
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {content.sections.map((section, index) => (
          <DropdownSection key={index}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {section.items.map((item, i) => (
                <li key={`${item.label}-${i}`}>
                  <DropdownItem as={Link} to={item.href} onClick={closeDropdown}>
                    {item.label}
                  </DropdownItem>
                </li>
              ))}
            </ul>
          </DropdownSection>
        ))}
      </DropdownContainer>
    </div>,
    document.body
  );
};


export default DropdownMenu;
