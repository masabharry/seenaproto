import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { PageContainer } from "../../App.styles";
import Topbar from "../../Components/Header/Topbar";
import styled from "styled-components";
import widgimage from "../../Assets/widgets.png";
import academicIcon from "../../Assets/icons/academicIcon.png";
import adminIcon from "../../Assets/icons/adminIcon.png";
import communicationIcon from "../../Assets/icons/communicationIcon.png";
import contentIcon from "../../Assets/icons/contentIcon.png";
import integrationIcon from "../../Assets/icons/integrationIcon.png";
import insightsIcon from "../../Assets/icons/insightsIcon.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  gap: 2rem;
  width: 100%;
  margin: 4rem 0;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: #7f00ff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.8;
  flex: 1;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const FeatureTourSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 97%;
  // background-color: #fff;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.49);
  background: transparent;
  padding: 1.5rem;
  border-radius: 20px;
`;
const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  color: white;
  // box-shadow: 0 8px 30px rgba(127, 0, 255, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(6px);
  text-align: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 40px rgba(127, 0, 255, 0.3);
  }
`;



const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.3rem 0;
`;


const CardContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  color: #cccccc;
  line-height: 1.6;
`;



const FeatureHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #7f00ff;
  margin-bottom: 1rem;
`;
const FeatureSubHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;



const FeatureTour = () => {
  const Data = {
    title: "AI Powered Smart Education for all institutes",
    subHeading: "Everything you are looking for",
    description:
      "SeenaDSaviour is an AI-powered school management system designed to simplify and automate everyday academic and administrative tasks. From facial recognition attendance and smart grading to fee predictions and intelligent reporting, SeenaDSaviour streamlines operations for teachers, students, and administrators, principal, owner, parents and general community creating a smarter, more connected educational environment.",
  };

  const features = [
    {
      title: "Academic Management",
      icon: academicIcon,
      points: [
        "Student Management",
        "Teacher Management",
        "Parent Management",
        "Student Attendance",
        "Student Leave Management",
        "Sample Paper Manager",
        "Time Table",
        "Academic Chat",
        "Remark Reporting",
        "Student Placement",
        "Club Management",
      ],
    },
    {
      title: "Administrative & Operational Management",
      icon: adminIcon,
      points: [
        "CMS",
        "Admission/Registration",
        "HR Module",
        "Payroll Management",
        "Fee Management",
        "ID Card Generator",
        "Certificate Generator",
        "User Management",
      ],
    },
    {
      title: "Communication & Engagement",
      icon: communicationIcon,
      points: [
        "SMS Alerts",
        "News Management",
        "Event Calendar",
        "Poll",
        "Alumni",
        "Visitor Register",
      ],
    },
    {
      title: "Digital Resource & Content Management",
      icon: contentIcon,
      points: [
        "Library Management",
        "Inventory Management",
        "Report Center",
        "Gallery",
        "Student Diary",
      ],
    },
    {
      title: "Technical Integration & System Access",
      icon: integrationIcon,
      points: [
        "Student Login",
        "Teacher Login",
        "Parent Login",
        "Barcode Integration",
      ],
    },
    {
      title: "Intelligence & Insights",
      icon: insightsIcon,
      points: ["Task Manager", "Complaint Report Manager", "Transport Manager"],
    },
  ];

  return (
    <PageContainer>
      <Topbar />
      <Header />
      <Container>
        <Heading>{Data.title}</Heading>
        <SubHeading>{Data.subHeading}</SubHeading>
        <DescriptionSection>
          <Description>{Data.description}</Description>
          <Image src={widgimage} alt="Widgets illustration" />
        </DescriptionSection>
        <FeatureTourSection>
          <FeatureHeading>Core Features of SeenaDsavior</FeatureHeading>
          <FeatureSubHeading>
            AI-Powered Smart Education System
          </FeatureSubHeading>
          <FeatureGrid>
            {features.map((feature, i) => (
  <FeatureCard key={i}>
    <Icon src={feature.icon} alt={`${feature.title} icon`} />
    <CardTitle>{feature.title}</CardTitle>
    <CardContent>
      {feature.points.map((point, idx) => (
        <li key={idx}>• {point}</li>
      ))}
    </CardContent>
  </FeatureCard>
))}

          </FeatureGrid>
        </FeatureTourSection>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default FeatureTour;
