// FeatureTour.jsx (with Hero section + Navigation + Modal with Detailed Points)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Header/Topbar";

// import { FiIdCard }

import {
  FiBookOpen,
  FiSettings,
  FiUsers,
  FiFolder,
  FiLogIn,
  FiBarChart2,
  FiUserCheck,
  FiCalendar,
  FiAlertCircle,
  FiCheckCircle,
  FiFileText,
  FiCreditCard,
  FiMessageSquare,
  FiGlobe,
  FiClipboard,
  FiDollarSign,
  FiUserPlus,
  FiUserX,
  FiAward,
  FiGrid,
  FiBook,
  FiBox,
  FiImage,
  FiEdit2,
  FiHash,
  FiCpu,
  FiTruck,
  FiCheckSquare,
  FiUsers as FiUsersIcon,
} from "react-icons/fi";

const PageContainer = styled.div`
  background: #090909;
  color: white;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 7rem 2rem;
  background: transparent;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #7f00ff;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #ccc;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #7f00ff;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 90%;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: left;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px #7f00ff33;
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: #7f00ff;
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: white;
  }
`;

const FeatureDesc = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
`;

const MainContent = styled.div`
  padding: 150px 0;
`;

// Modal Styles
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled(motion.div)`
  background: #111;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: white;
  position: relative;
`;

const ModalTitle = styled.h2`
  color: #7f00ff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ModalList = styled.ul`
  padding-left: 0;
  margin-top: 1rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.7rem;
    font-size: 0.95rem;
    color: #ccc;

    svg {
      color: #7f00ff;
      font-size: 1.1rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FeatureTour = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      title: "Academics",
      icon: <FiBookOpen />,
      desc: "Manage students, teachers, timetable, and more.",
      points: [
        { icon: <FiUserCheck />, text: "Student Management" },
        { icon: <FiUsersIcon />, text: "Teacher Management" },
        { icon: <FiUsersIcon />, text: "Parent Management" },
        { icon: <FiCalendar />, text: "Student Attendance" },
        { icon: <FiCalendar />, text: "Leave Management" },
        { icon: <FiFileText />, text: "Sample Paper Manager" },
        { icon: <FiCalendar />, text: "Time Table" },
        { icon: <FiMessageSquare />, text: "Academic Chat" },
        { icon: <FiAlertCircle />, text: "Remark Reporting" },
        { icon: <FiCheckCircle />, text: "Student Placement" },
        { icon: <FiUsersIcon />, text: "Club Management" },
      ],
    },
    {
      title: "Admin Tools",
      icon: <FiSettings />,
      desc: "Handle fees, admissions, ID cards, HR, etc.",
      points: [
        { icon: <FiGrid />, text: "CMS" },
        { icon: <FiUserPlus />, text: "Admission/Registration" },
        { icon: <FiUsers />, text: "HR Module" },
        { icon: <FiDollarSign />, text: "Payroll Management" },
        { icon: <FiCreditCard />, text: "Fee Management" },
        { icon: <FiUserX />, text: "ID Card Generator" },
        { icon: <FiAward />, text: "Certificate Generator" },
        { icon: <FiUserCheck />, text: "User Management" },
      ],
    },
    {
      title: "Engagement",
      icon: <FiUsers />,
      desc: "News, polls, alumni, and SMS alerts.",
      points: [
        { icon: <FiMessageSquare />, text: "SMS Alerts" },
        { icon: <FiGlobe />, text: "News Management" },
        { icon: <FiCalendar />, text: "Event Calendar" },
        { icon: <FiBarChart2 />, text: "Poll" },
        { icon: <FiUsers />, text: "Alumni" },
        { icon: <FiClipboard />, text: "Visitor Register" },
      ],
    },
    {
      title: "Content",
      icon: <FiFolder />,
      desc: "Library, reports, galleries, diaries.",
      points: [
        { icon: <FiBook />, text: "Library Management" },
        { icon: <FiBox />, text: "Inventory Management" },
        { icon: <FiFileText />, text: "Report Center" },
        { icon: <FiImage />, text: "Gallery" },
        { icon: <FiEdit2 />, text: "Student Diary" },
      ],
    },
    {
      title: "Access",
      icon: <FiLogIn />,
      desc: "Role-based login, barcode & system integration.",
      points: [
        { icon: <FiLogIn />, text: "Student Login" },
        { icon: <FiUserCheck />, text: "Teacher Login" },
        { icon: <FiUsers />, text: "Parent Login" },
        { icon: <FiHash />, text: "Barcode Integration" },
      ],
    },
    {
      title: "Insights",
      icon: <FiBarChart2 />,
      desc: "AI reports, tasks, transport & complaint system.",
      points: [
        { icon: <FiCpu />, text: "AI Reports" },
        { icon: <FiCheckSquare />, text: "Task Manager" },
        { icon: <FiAlertCircle />, text: "Complaint Report Manager" },
        { icon: <FiTruck />, text: "Transport Manager" },
      ],
    },
  ];

  return (
    <PageContainer>
      <Topbar />
      <Header />
      <MainContent>
        <HeroSection>
          <Title>AI Powered Smart Education for All</Title>
          <Subtitle>
            Simplify and automate school management — from attendance and
            reports to communication and analytics.
          </Subtitle>
        </HeroSection>
        <Container>
          <SubHeading>Explore Our Core Modules</SubHeading>
          <FeatureGrid>
            {features.map((f, i) => (
              <FeatureCard key={i} onClick={() => setSelectedFeature(f)}>
                <FeatureHeader>
                  {f.icon}
                  <h3>{f.title}</h3>
                </FeatureHeader>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Container>
      </MainContent>

      <AnimatePresence>
        {selectedFeature && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
          >
            <ModalBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedFeature(null)}>
                &times;
              </CloseButton>
              <ModalTitle>{selectedFeature.title}</ModalTitle>
              <ModalList>
                {selectedFeature.points?.map((item, index) => (
                  <li key={index}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ModalList>
            </ModalBox>
          </Overlay>
        )}
      </AnimatePresence>

      <Footer />
    </PageContainer>
  );
};

export default FeatureTour;
