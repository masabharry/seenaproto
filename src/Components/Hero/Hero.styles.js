import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: #090909;
  min-height: 80vh;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 50vh;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroText = styled.div`
  margin-bottom: 2rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
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
  margin: 0 1rem;
  border: 2px solid #3498db;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ primary }) => (primary ? '#3498db' : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : '#3498db')};
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${({ primary }) => (primary ? '#2980b9' : '#3498db')};
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

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;


