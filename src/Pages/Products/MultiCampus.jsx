import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {
  FiBookOpen,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";

const PageWrapper = styled.div`
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
     padding: 7rem 2rem;
  margin: 5rem auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #7f00ff;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  max-width: 700px;
  margin: 1rem auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7f00ff;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px #7f00ff33;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

const CTA = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid #7f00ff;
`;

const Button = styled.a`
  background: #7f00ff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 1rem;
  &:hover {
    background: #6600cc;
  }
`;

const MultiCampus = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Multi-Institution Management</Title>
        <Subtitle>
          One powerful platform to run schools, colleges, academies, and universities — all from a single dashboard.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🏫 Designed for Institution Groups</SectionTitle>
        <CardGrid>
          <Card>
            <Icon><FiGlobe /></Icon>
            <CardTitle>Multi-Type Support</CardTitle>
            <CardText>
              Manage schools, colleges, madrassas, IT academies, or preschool networks — with tailored features for each.
            </CardText>
          </Card>
          <Card>
            <Icon><FiUsers /></Icon>
            <CardTitle>Dedicated Roles</CardTitle>
            <CardText>
              Assign campus heads, deans, registrars, and managers — scoped by institution type and role.
            </CardText>
          </Card>
          <Card>
            <Icon><FiSettings /></Icon>
            <CardTitle>Custom Module Control</CardTitle>
            <CardText>
              Enable or disable modules per institute — attendance for schools, transcripts for colleges, fee slabs for academies.
            </CardText>
          </Card>
          <Card>
            <Icon><FiBarChart2 /></Icon>
            <CardTitle>Group-Level Insights</CardTitle>
            <CardText>
              Compare and analyze performance across campuses with unified, exportable dashboards.
            </CardText>
          </Card>
          <Card>
            <Icon><FiBookOpen /></Icon>
            <CardTitle>Flexible Curriculum Handling</CardTitle>
            <CardText>
              Define term-based, semester-based, or course-based structures depending on institute type.
            </CardText>
          </Card>
        </CardGrid>
      </Section>

      {/* <CTA>
        <h2>Built for Educational Leaders</h2>
        <p style={{ margin: "1rem 0" }}>
          Whether you're managing a city-wide school network or diverse institution types, SDS makes control simple and intelligent.
        </p>
        <Button href="#">Request Live Demo</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default MultiCampus;
