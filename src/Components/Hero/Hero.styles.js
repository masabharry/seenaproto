import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  canvas {
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;


export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  padding: 4rem 2rem;
  min-height: 100vh;
  background: transparent;
`;

export const HeroText = styled.div`
  margin-bottom: 2rem;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: fex-start;
  justify-content: flex-start;
  // text-align: flex-start;
  padding: 4rem 0rem;
  max-width: 100%;
  // margin: 0 auto;
  // border-left: 5px solid #7F00FF;

    will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #8a3ffc; // Singularity purple
  // margin: 0 0 1rem 0;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  cursor: default;
  width: auto;
  &:hover {
    color: #7F00FF; // Singularity purple
    transition: color 0.3s ease;
  }
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 10;
`;

export const CtaButton = styled.button`
  padding: 0.8rem 2rem;
  margin: 1rem 0rem;
  border: 2px solid #7F00FF;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ primary }) => (primary ? "#7F00FF" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#7F00FF")};
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  //  justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
  max-width: 346px;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#7F00FF" : "#7F00FF")};
    
    color: ${({primary}) => (primary ? "#fff" : "#fff")};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
    
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    margin: 0.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    margin: 0.5rem;
    font-size: 0.8rem;
  }
  }
`;
