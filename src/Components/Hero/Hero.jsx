import React from 'react';
import { 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  CtaButton 
} from './Hero.styles';
import { ClothBackground } from '../ClothBackground';

const Hero = () => {
  return (
    <HeroContainer>
      <ClothBackground />
      <HeroContent>
        <div>
          <HeroSubtitle>AI-Powered</HeroSubtitle>
          <HeroTitle>Simplicity for Smarter Education</HeroTitle>
        </div>
        <div>
          <CtaButton primary>Explore us</CtaButton>
          <CtaButton>Get Started</CtaButton>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;