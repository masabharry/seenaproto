// components/Footer/Footer.styles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
  margin-top: auto;
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
    color: #bdc3c7;
    transition: color 0.3s;

    &:hover {
      color: #3498db;
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
`;