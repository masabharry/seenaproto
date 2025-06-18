// components/Header/DropdownMenu.jsx
import React from 'react';
import {
  DropdownContainer,
  DropdownItem,
  DropdownTitle,
  DropdownSection
} from './DropdownMenu.styles'; // Ye sirf styled-components hain

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
        title: null,
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

  if (!content) return null;

  return (
    <DropdownContainer onClick={(e) => e.stopPropagation()}>
      {content.sections.map((section, index) => (
        <DropdownSection key={index}>
          {section.title && <DropdownTitle>{section.title}</DropdownTitle>}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
  );
};

export default DropdownMenu;
