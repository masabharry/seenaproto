// components/Footer/Footer.styles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: transparent;
  color: #ecf0f1;
  padding: 2rem 0;
  margin-top: auto;
  z-index: 10;
  border-top: 1px solid #7F00FF;
  border-radius:20%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #7F00FF;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
  readonly;
`;