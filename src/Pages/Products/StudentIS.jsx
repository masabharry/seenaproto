import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {
  FiUserCheck,
  FiFileText,
  FiBarChart2,
  FiCalendar,
  FiBookOpen,
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

const studentFeatures = [
  {
    icon: <FiUserCheck />,
    title: "Smart Profile & ID",
    text: "Each student gets a digital ID with attendance, status, and academic info available 24/7.",
  },
  {
    icon: <FiFileText />,
    title: "Digital Progress Reports",
    text: "Instantly access term-wise or subject-wise performance with AI-generated tips.",
  },
  {
    icon: <FiCalendar />,
    title: "Event & Exam Calendar",
    text: "Never miss an assignment or exam — students see an auto-synced calendar.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Personal Analytics",
    text: "AI-driven insights into weak areas, improvement charts, and performance graphs.",
  },
  {
    icon: <FiBookOpen />,
    title: "Learning Hub",
    text: "Access AI-suggested resources, previous papers, and personalized learning material.",
  },
];

const StudentIS = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Student Smart Information System</Title>
        <Subtitle>
          Give your students the tools to own their learning journey with AI-powered insights and transparency.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🎓 Features Students Love</SectionTitle>
        <CardGrid>
          {studentFeatures.map((item, index) => (
            <Card key={index}>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Footer />
    </PageWrapper>
  );
};

export default StudentIS;
