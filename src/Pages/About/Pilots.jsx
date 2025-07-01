import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FaGraduationCap } from "react-icons/fa";

const pilots = [
  {
    school: "Rising Star Public School",
    city: "Islamabad",
    type: "School (Pilot Phase)",
    feedback: "Our teachers felt more empowered and saved time planning lessons. Excited for full launch!",
    logo: "https://via.placeholder.com/300x150?text=Rising+Star",
  },
  {
    school: "Iqbal Academy",
    city: "Faisalabad",
    type: "AI Testing School",
    feedback: "Students engaged better with the gamified system, and parents appreciated real-time insights.",
    logo: "https://via.placeholder.com/300x150?text=Iqbal+Academy",
  },
  {
    school: "Al-Noor School",
    city: "Lahore",
    type: "Beta Partner",
    feedback: "SDS is the most promising system we've seen for smart classroom transformation.",
    logo: "https://via.placeholder.com/300x150?text=Al-Noor+School",
  },
];

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
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  max-width: 700px;
  margin: 1rem auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  width: 90%;
  margin: 0 auto;
   border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7f00ff;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const SchoolLogo = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SchoolName = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.2rem;
`;

const SchoolType = styled.p`
  color: #7f00ff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Feedback = styled.p`
  color: #ccc;
  font-size: 0.9rem;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 4rem;
  border-top: 1px solid #7f00ff;
  padding-top: 3rem;
`;

const Button = styled.a`
  background: #7f00ff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #6600cc;
  }
`;

const Pilots = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Early SDS Users</Title>
        <Subtitle>
          We're building with real classrooms and real communities from day one.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🎓 Pilot Schools & Early Partners</SectionTitle>
        <Grid>
          {pilots.map((pilot, i) => (
            <Card key={i}>
              {/* <SchoolLogo src={pilot.logo} alt={pilot.school} /> */}
              {/* graduation cap icon */}
              <FaGraduationCap/>
              <SchoolName>{pilot.school}</SchoolName>
              <SchoolType>{pilot.type} – {pilot.city}</SchoolType>
              <Feedback>"{pilot.feedback}"</Feedback>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* <CTA>
        <h2>Want to Join the Pilot Program?</h2>
        <p style={{ margin: "1rem 0" }}>
          Whether you're a school or an educator, we'd love your early feedback.
        </p>
        <Button href="/community/feedback">Apply or Give Feedback</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default Pilots;
