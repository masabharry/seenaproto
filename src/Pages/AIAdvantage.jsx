import React from "react";
import styled from "styled-components";
import Topbar from "../Components/Header/Topbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {
  FiCpu,
  FiUserCheck,
  FiBookOpen,
  FiBarChart2,
  FiAlertCircle,
  FiMessageCircle,
} from "react-icons/fi";

const PageWrapper = styled.div`
//   background: linear-gradient(145deg, #0b0b0b, #09001a);
  color: white;
  min-height: 100vh;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem ;
//   background: #0a0a0a;
  margin: 5rem auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #7f00ff88;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  max-width: 700px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  width: 85%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff55;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #7f00ff;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #111111dd;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 12px #00000044;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px #7f00ff44;
  }
`;

const Icon = styled.div`
  font-size: 2.2rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

const CTA = styled.div`
  background: #130027;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid #7f00ff55;
  border-bottom: 1px solid #7f00ff55;
`;

const CTAHeading = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 12px #7f00ff99;
`;

const CTAText = styled.p`
  color: #aaa;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
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
  &:hover {
    background: #6600cc;
  }
`;

const features = [
  {
    icon: <FiUserCheck />,
    title: "Personalized Student Insights",
    text: "AI analyzes student performance to highlight weak areas, suggest learning materials, and auto-generate smart reports.",
  },
  {
    icon: <FiBookOpen />,
    title: "AI Lesson Planning for Teachers",
    text: "Teachers get AI-generated lesson plans, quizzes, and feedback templates tailored to their subjects and student needs.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Real-Time Admin Analytics",
    text: "Admins receive predictive trends, risk alerts, and auto-summaries across attendance, finances, and academics.",
  },
  {
    icon: <FiAlertCircle />,
    title: "Smart Alerts for Principals",
    text: "Principals get insights on institutional health, alerts on underperformance, and early warnings before problems grow.",
  },
  {
    icon: <FiMessageCircle />,
    title: "AI Reports for Parents",
    text: "Parents receive digestible AI-generated performance reports, behavior alerts, and reminders.",
  },
  {
    icon: <FiCpu />,
    title: "Built-in AI Assistant",
    text: "Chatbot for FAQs, instant report generation, admission help, and real-time support via voice/text interface.",
  },
];

const AIAdvantage = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />

      <Hero>
        <Title>The AI Advantage</Title>
        <Subtitle>
          SDS is not just digital — it’s intelligent. Discover how Artificial Intelligence transforms your educational ecosystem.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>💡 AI Use Cases for Everyone</SectionTitle>
        <Grid>
          {features.map((item, index) => (
            <Card key={index}>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* <CTA>
        <CTAHeading>Experience the Future of Education</CTAHeading>
        <CTAText>
          Join thousands of educators, students, and parents already preparing for tomorrow with the power of AI — today.
        </CTAText>
        <Button href="/contact-us">Request a Demo</Button>
      </CTA> */}

      <Footer />
    </PageWrapper>
  );
};

export default AIAdvantage;
