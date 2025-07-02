import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {
  FiCheckSquare,
  FiClipboard,
  FiDollarSign,
  FiBookOpen,
  FiUsers,
  FiSettings,
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

const erpModules = [
  {
    icon: <FiCheckSquare />,
    title: "Attendance & Leaves",
    text: "Track daily attendance, late entries, and manage leave requests with biometric or manual modes.",
  },
  {
    icon: <FiClipboard />,
    title: "Exams & Results",
    text: "Create multiple exam types, generate report cards, and enable parent access to performance.",
  },
  {
    icon: <FiDollarSign />,
    title: "Finance & Fee",
    text: "Customize fee structures, scholarships, dues, and generate instant receipts with auto-calculations.",
  },
  {
    icon: <FiBookOpen />,
    title: "Academics & Curriculum",
    text: "Define subjects, design timetables, upload material, and track student academic journeys.",
  },
  {
    icon: <FiUsers />,
    title: "HR & Payroll",
    text: "Manage employee records, contracts, attendance, and automate salary generation with roles.",
  },
  {
    icon: <FiSettings />,
    title: "Configurable Modules",
    text: "Enable or disable modules based on your institution's type and needs — no bloat, just what you need.",
  },
];

const ERPModules = () => {
  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Customisable ERP Modules</Title>
        <Subtitle>
          Activate only what you need. SDS gives you the freedom to tailor every module to your system.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🧠 Core Modules</SectionTitle>
        <CardGrid>
          {erpModules.map((item, index) => (
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

export default ERPModules;
