// components/Header/DropdownMenu.jsx
import React from 'react';
import { DropdownContainer, DropdownItem, DropdownTitle, DropdownSection } from './DropdownMenu';

const dropdownContent = {
  Product: {
    sections: [
      {
        title: "Feature Tour",
        items: [
          "Mobile app",
          "Multi Campus support",
          "Smart Student IS",
          "Custom ERP Modules",
          "Integration center",
          "Why SeenaDSavior",
          "AI Advantage",
          "FAQ"
        ]
      }
    ]
  },
  About: {
    sections: [
      {
        title: "Our Vision",
        items: [
          "Founding Story",
          "Meet the Team",
          "Pilot Schools & Users",
          "News & Mention",
          "Join our Team"
        ]
      }
    ]
  },
  Actors: {
    sections: [
      {
        items: [
          "Student",
          "Teacher",
          "Admin",
          "Principal",
          "Owner",
          "Parents",
          "Community"
        ]
      }
    ]
  }
};

const DropdownMenu = ({ type, closeDropdown }) => {
  const content = dropdownContent[type];

  return (
    <DropdownContainer onClick={(e) => e.stopPropagation()}>
      {content.sections.map((section, index) => (
        <DropdownSection key={index}>
          {section.title && <DropdownTitle>{section.title}</DropdownTitle>}
          {section.items.map((item) => (
            <DropdownItem key={item} href="#" onClick={closeDropdown}>
              {item}
            </DropdownItem>
          ))}
        </DropdownSection>
      ))}
    </DropdownContainer>
  );
};

export default DropdownMenu;