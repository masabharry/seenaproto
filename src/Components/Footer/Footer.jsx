// components/Footer/Footer.jsx
import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterCopyright } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="/contact-us">Contact Us</a>
        </FooterLinks>
        <FooterCopyright>
          © {new Date().getFullYear()} SeenaDSavior. All rights reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;