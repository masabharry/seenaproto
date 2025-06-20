import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CtaButton,
  ButtonDiv,
} from "./Hero.styles";
import { ClothBackground } from "../ClothBackground";

import { PiArrowCircleRight } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <HeroContainer>
      {/* <ClothBackground /> */}
      <HeroContent>
        <HeroTitle>AI Powered</HeroTitle>
        <HeroTitle>Future Education System</HeroTitle>
        <ButtonDiv>
          <CtaButton primary="true">
            Explore us <MdArrowOutward fontSize={20}/>
          </CtaButton>
          <CtaButton>
            Get Started <PiArrowCircleRight  fontSize={20}/>
          </CtaButton>
        </ButtonDiv>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
