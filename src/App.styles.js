// src/App.styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    line-height: 1.6;
    color: #333;
    background-color: #090909;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  min-height: 100vh;
  padding-top: 140px; /* Adjust based on header height */
`;

export const PageContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Add any other styled components you need...