import React from "react";
import styled from "styled-components";
import { FiEye, FiTarget, FiActivity, FiUsers, FiBookOpen, FiGlobe } from "react-icons/fi";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem;
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
  width: 85%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7f00ff;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #111;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #222;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    border-color: #7f00ff;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #7f00ff;
  margin-bottom: 0.8rem;
`;

const CardTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
`;

const CTA = styled.div`
  background: transparent;
  border: 1px solid #7f00ff;
  padding: 3rem 2rem;
  border-radius: 14px;
  text-align: center;
  margin-top: 4rem;
  transition: all 0.3s ease;
  &:hover {
    background: #7f00ff;
    color: white;
  }
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

const Vision = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />

      <Hero>
        <Title>Our Vision</Title>
        <Subtitle>
          Transforming education through AI to unlock every learner’s potential — no matter their background.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🌍 A Mission That Matters</SectionTitle>
        <Paragraph>
          We believe every child deserves access to high-quality, personalized education — not just in cities,
          but in every classroom, every village, every home. With SeenadSaviour, we’re building a smart education system
          where teachers are empowered, students are supported, and technology works for equity and progress.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>🎯 Our Core Values</SectionTitle>
        <CardGrid>
          <Card>
            <Icon><FiTarget /></Icon>
            <CardTitle>Purpose-Driven</CardTitle>
            <p>We’re here to fix what’s broken — not just build apps.</p>
          </Card>
          <Card>
            <Icon><FiActivity /></Icon>
            <CardTitle>AI for Good</CardTitle>
            <p>We use AI to empower teachers and personalize learning, not replace humans.</p>
          </Card>
          <Card>
            <Icon><FiBookOpen /></Icon>
            <CardTitle>Accessible Learning</CardTitle>
            <p>Designed to work even for underserved communities and basic internet setups.</p>
          </Card>
          <Card>
            <Icon><FiUsers /></Icon>
            <CardTitle>Community-Led</CardTitle>
            <p>We build *with* educators, not just *for* them — every update starts with feedback.</p>
          </Card>
          <Card>
            <Icon><FiGlobe /></Icon>
            <CardTitle>Scalable Impact</CardTitle>
            <p>One smart system, many schools. Designed to scale from 1 to 10,000 classrooms.</p>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>🔧 What We’re Building</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle>Smart Student Dashboard</CardTitle>
            <p>Track goals, get help with AI, and see gamified progress in real-time.</p>
          </Card>
          <Card>
            <CardTitle>AI-Powered Teacher Tools</CardTitle>
            <p>Lesson planners, performance alerts, and smart grading to reduce workload.</p>
          </Card>
          <Card>
            <CardTitle>Leadership Insights</CardTitle>
            <p>Principals and admins can monitor trends and intervene early with AI summaries.</p>
          </Card>
        </CardGrid>
      </Section>

      {/* <CTA>
        <h2>Want to Help Rebuild Education?</h2>
        <p style={{ margin: "1rem 0" }}>
          Join the SeenadSaviour community and help shape a better learning future.
        </p>
        <Button href="/community/feedback">Give Feedback</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default Vision;
