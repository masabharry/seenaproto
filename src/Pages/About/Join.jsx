import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const roles = [
  {
    title: "Frontend Developer (React/Expo)",
    type: "Remote · Volunteer / Intern",
    description:
      "Help us build beautiful and responsive mobile/web interfaces with React Native & Expo.",
  },
  {
    title: "AI Research Intern",
    type: "Remote · Paid Internship",
    description:
      "Assist in developing and testing adaptive learning models for personalized education.",
  },
  {
    title: "UI/UX Designer",
    type: "Flexible · Volunteer / Remote",
    description:
      "Design intuitive, accessible, and beautiful interfaces for students, parents, and teachers.",
  },
  {
    title: "Outreach & Community Coordinator",
    type: "Remote · Volunteer",
    description:
      "Engage with early adopters, schools, and teachers to gather feedback and grow awareness.",
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

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const RoleCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const RoleType = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.7rem;
`;

const RoleDesc = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

const ApplyButton = styled.a`
  margin-top: 1rem;
  display: inline-block;
  background: #7f00ff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #6600cc;
  }
`;

const CTA = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid #7f00ff;
`;

const Join = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Join the SDS Team</Title>
        <Subtitle>
          We’re building the future of education with vision, AI, and purpose — and we’d love your help.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🚀 Open Roles</SectionTitle>
        <CardGrid>
          {roles.map((role, i) => (
            <RoleCard key={i}>
              <RoleTitle>{role.title}</RoleTitle>
              <RoleType>{role.type}</RoleType>
              <RoleDesc>{role.description}</RoleDesc>
              <ApplyButton href="mailto:seenadsaviour@gmail.com?subject=Applying for SDS Role">
                Apply Now
              </ApplyButton>
            </RoleCard>
          ))}
        </CardGrid>
      </Section>

      <CTA>
        <h2>Don’t see a perfect fit?</h2>
        <p style={{ margin: "1rem 0" }}>
          Email us your ideas — we’re always open to passionate contributors and dreamers.
        </p>
        <ApplyButton href="mailto:seenadsaviour@gmail.com">Contact Us</ApplyButton>
      </CTA>

      <Footer />
    </PageWrapper>
  );
};

export default Join;
