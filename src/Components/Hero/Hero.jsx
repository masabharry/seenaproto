import React from 'react';
import {
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  CtaButton,
  HeroWrapper,
} from './Hero.styles';
import AnimatedBackground from '../AnimatedBackground';

const Hero = () => {
  return (
    <HeroWrapper>
      <AnimatedBackground />
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
    </HeroWrapper>
  );
};

export default Hero;
