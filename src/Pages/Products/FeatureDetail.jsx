// FeatureDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Header/Topbar";
import Footer from "../../Components/Footer/Footer";

const PageWrapper = styled.div`
  background: #090909;
  color: white;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
`;

const ContentSection = styled.div`
  padding: 7rem 2rem 3rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.7;
`;

const FeatureDetail = () => {
  const { slug } = useParams();

  const featureContent = {
    academics: {
      title: "Academic Management",
      description:
        "Manage students, teachers, attendance, leave, timetable, and academic progress with centralized tools and automation.",
    },
    admin: {
      title: "Administrative Tools",
      description:
        "Handle registrations, fees, payroll, HR, ID cards, certificates, and more through smart, customizable modules.",
    },
    engagement: {
      title: "Communication & Engagement",
      description:
        "Improve involvement with parents and students through SMS alerts, polls, events, alumni tracking, and notifications.",
    },
    content: {
      title: "Digital Content Management",
      description:
        "Organize and share resources like library records, gallery images, student diaries, and inventory reports efficiently.",
    },
    access: {
      title: "System Access & Integration",
      description:
        "Allow role-based logins for teachers, students, and parents with support for barcode systems and secure access protocols.",
    },
    insights: {
      title: "Intelligence & Insights",
      description:
        "Get smart reports, complaint tracking, transportation management, and task tracking powered by AI-driven analytics.",
    },
  };

  const content = featureContent[slug];

  if (!content) {
    return (
      <PageWrapper>
        <Topbar />
        <Header />
        <ContentSection>
          <Title>Module Not Found</Title>
          <Description>
            Sorry, we couldn't find the information for the requested feature.
          </Description>
        </ContentSection>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <ContentSection>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
      </ContentSection>
      <Footer />
    </PageWrapper>
  );
};

export default FeatureDetail;
