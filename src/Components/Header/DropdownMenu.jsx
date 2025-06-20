import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import dropdownContent from "./DropdownContent";
import {
  DropdownContainer,
  DropdownItem,
  DropdownSection,
} from "./DropdownMenu.styles";

const DropdownMenu = ({ type, closeDropdown }) => {
  const content = dropdownContent[type];
  const dropdownRef = useRef(null);
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (!content) return;

    const triggerEl = document.querySelector(`[data-trigger="${type}"]`);
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect();
      setStyle({
        top: rect.bottom + 5 + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [type, content]);

  const timeoutRef = useRef(null);

  // Auto-close on mouse leave with small delay buffer
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 300); // 300ms delay to allow re-entry
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

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
    >
      <DropdownContainer
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {content.sections.map((section, index) => (
          <DropdownSection key={index}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {section.items.map((item, i) => (
                <li key={`${item}-${i}`}>
                  <DropdownItem href="#" onClick={closeDropdown}>
                    {item}
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
