import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #090909; 
`;

export const HeroText = styled.div`
  margin-bottom: 2rem;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10; // Must be higher than cloth background
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #8a3ffc; // Singularity purple
  margin: 0 0 1rem 0;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CtaButton = styled.button`
  padding: 0.8rem 2rem;
  margin: 1rem 1rem;
  border: 2px solid #8a3ffc;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ primary }) => (primary ? '#8a3ffc' : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : '#8a3ffc')};
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${({ primary }) => (primary ? '#6e2dd9' : '#8a3ffc')};
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    margin: 0.5rem;
    font-size: 0.9rem;
  }
`;