// Components/Features/Features.jsx
import React from 'react';
import styled from 'styled-components';
import { FiZap, FiTrendingUp, FiSmartphone } from 'react-icons/fi';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #0b0b0b;
  text-align: center;
  // z-index: 2;
`; 

const Title = styled.h2`
  font-size: 2.5rem;
  color: #7f00ff;
  margin-bottom: 2rem;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 16px;
  color: white;
  transition: 0.3s;
  z-index: 2;
  &:hover {
    box-shadow: 0 0 20px rgba(127, 0, 255, 0.3);
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: #ccc;
  }

  svg {
    font-size: 2rem;
    color: #7f00ff;
  }
`;

const Features = () => {
  return (
    <Section>
      <Title>Why Choose Us</Title>
      <Grid>
        <Card>
          <FiZap />
          <h3>AI Automation</h3>
          <p>Grading, attendance, reports — all intelligently automated.</p>
        </Card>
        <Card>
          <FiSmartphone />
          <h3>Mobile App</h3>
          <p>Seamless experience across all devices and platforms.</p>
        </Card>
        <Card>
          <FiTrendingUp />
          <h3>Data Analysis</h3>
          <p>Make decisions with smart dashboards and performance metrics.</p>
        </Card>
      </Grid>
    </Section>
  );
};

export default Features;
