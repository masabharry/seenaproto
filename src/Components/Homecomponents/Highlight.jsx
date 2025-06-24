// /Highlights.jsx
import React from 'react';
import styled from 'styled-components';
import { FiUser, FiShield, FiGlobe, FiUsers } from 'react-icons/fi';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #0d0d0d;
  text-align: center;
//   z-index: 2;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const RoleBox = styled.div`
  flex: 1;
  min-width: 220px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(127, 0, 255, 0.1);
  padding: 2rem;
  border-radius: 14px;
  color: white;
  transition: 0.3s;
  z-index: 2;

  svg {
    font-size: 1.8rem;
    color: #7f00ff;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.85rem;
    color: #ccc;
  }

  &:hover {
    background: rgba(127, 0, 255, 0.05);
    transform: translateY(-5px);
  }
`;

const Highlights = () => (
  <Section>
    <h2 style={{ color: '#7f00ff', marginBottom: '2rem', zIndex: 2 }}>Empowering Everyone</h2>
    <Grid>
      <RoleBox>
        <FiUser />
        <h4>Students</h4>
        <p>Personalized learning, attendance, and progress tracking.</p>
      </RoleBox>
      <RoleBox>
        <FiShield />
        <h4>Teachers</h4>
        <p>Timetable, grading, and intelligent lesson planning.</p>
      </RoleBox>
      <RoleBox>
        <FiGlobe />
        <h4>Parents</h4>
        <p>Instant updates on child’s performance and school events.</p>
      </RoleBox>
      <RoleBox>
        <FiUsers />
        <h4>Admins</h4>
        <p>Full control of operations, fees, HR, and compliance.</p>
      </RoleBox>
    </Grid>
  </Section>
);

export default Highlights;
