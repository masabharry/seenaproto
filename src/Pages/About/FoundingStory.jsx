import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FiHeart, FiAlertCircle, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem 5rem;
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

const Icon = styled.div`
  font-size: 2rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const StoryCard = styled.div`
  background: #111;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #222;
  text-align: center;
  margin: 2rem 0;
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

const FoundingStory = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />

      <Hero>
        <Title>How It All Began</Title>
        <Subtitle>
          A simple idea born out of frustration and hope — built to transform how education works.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🛑 The Problem We Saw</SectionTitle>
        <StoryCard>
          <Icon><FiAlertCircle /></Icon>
          <Paragraph>
            We saw schools where teachers were overworked, students felt unseen, and parents had no real insight. 
            The same patterns repeated — manual work, outdated systems, and no innovation reaching the people who needed it most.
          </Paragraph>
        </StoryCard>
      </Section>

      <Section>
        <SectionTitle>⚡ The Spark</SectionTitle>
        <StoryCard>
          <Icon><FiZap /></Icon>
          <Paragraph>
            One night, while helping a student in a low-income school prepare for exams, we realized the problem wasn’t a lack of intelligence — 
            it was a lack of tools. That evening sparked our mission: to build a smart education system powered by AI but guided by empathy.
          </Paragraph>
        </StoryCard>
      </Section>

      <Section>
        <SectionTitle>🚀 The Journey</SectionTitle>
        <StoryCard>
          <Icon><FiTrendingUp /></Icon>
          <Paragraph>
            With no outside funding and just a small group of passionate developers and teachers, we started building. 
            We ran pilots in underfunded classrooms, rewrote plans a dozen times, and even failed in our first attempts. 
            But we never gave up — because we knew this mattered.
          </Paragraph>
        </StoryCard>
      </Section>

      <Section>
        <SectionTitle>❤️ What Drives Us Today</SectionTitle>
        <StoryCard>
          <Icon><FiHeart /></Icon>
          <Paragraph>
            Every time a teacher says “this saved me hours,” or a parent thanks us for finally understanding their child, 
            we’re reminded why we started. We’re still in development, still improving, and still obsessed with making learning accessible, intelligent, and joyful.
          </Paragraph>
        </StoryCard>
      </Section>

      {/* <CTA>
        <h2>Be Part of Our Story</h2>
        <p style={{ margin: "1rem 0" }}>
          Join our community, test the beta, or just give us feedback — together, we can rebuild education.
        </p>
        <Button href="/community/feedback">Give Early Feedback</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default FoundingStory;
