// components/Hero/Hero.jsx
import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroText, CtaButton } from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroSubtitle>AI-Powered</HeroSubtitle>
        <HeroTitle>Simplicity for Smarter Education</HeroTitle>
      </HeroText>
      <div>
        <CtaButton primary>Explore us</CtaButton>
        <CtaButton>Get Started</CtaButton>
      </div>
    </HeroContainer>
  );
};

export default Hero;