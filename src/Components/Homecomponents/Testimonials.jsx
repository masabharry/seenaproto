// Components/Testimonials/Testimonials.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
  text-align: center;
  // z-index: 2;
`;

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Quote = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 14px;
  max-width: 340px;
  font-style: italic;
  font-size: 0.95rem;
  color: #ccc;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    box-shadow: 0 0 20px rgba(127, 0, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const Testimonials = () => {
  return (
    <Section>
      <h2 style={{ color: '#7f00ff', marginBottom: '2rem', zIndex: 2 }}>Loved By Institutions</h2>
      <Grid>
        <Quote>
          “SeenaDSaviour has transformed how we track attendance and performance. It’s a game-changer for teachers.”
          <br />
          <strong>– Aisha, Teacher</strong>
        </Quote>
        <Quote>
          “As a principal, I can monitor everything from a dashboard. No more scattered data.”
          <br />
          <strong>– Mr. Raza, School Admin</strong>
        </Quote>
        <Quote>
          “Finally, I get notifications about my child's results and holidays instantly!”
          <br />
          <strong>– Parent of Class 7 Student</strong>
        </Quote>
      </Grid>
    </Section>
  );
};

export default Testimonials;
