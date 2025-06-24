import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FiShield, FiMessageSquare, FiUsers } from "react-icons/fi";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Header/Topbar";
import Footer from "../../Components/Footer/Footer";

// Styled Components
const PageWrapper = styled.div`
  background: #090909;
  color: white;
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
  &:hover{
    color: #7f00ff;

  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StoreButton = styled.a`
  background: transparent;
  color: #7f00ff;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #7f00ff;
  &:hover {
    // transform: scale(1.05);
    background: #7f00ff;
    color: white;
  }
`;

const FeatureSection = styled.div`
  padding: 4rem 2rem;
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #7F00FF;
//   border-radius:20%;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #7f00ff;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    color: #fff;}
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: #111;
  border-radius: 1rem;
  padding: 1.5rem;
  //   box-shadow: 0 0 15px #7f00ff33;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-20px) scale(1.03);
    box-shadow: 0 0 15px #7f00ff33;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.8rem;

    svg {
      color: #7f00ff;
      cursor: pointer;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
      cursor: pointer;
    }
  }

  p {
    font-size: 0.88rem;
    color: #ccc;
    line-height: 1.4;
    cursor: pointer;
  }
`;

const MainContent = styled.div`
  padding: 150px 0; 
`;

// Feature Data
const features = [
  {
    icon: <FiShield size={26} />,
    title: "Secure Profiles",
    description:
      "Each role has separate, secure access with custom permissions.",
  },
  {
    icon: <IoIosRocket size={26} />,
    title: "AI Smart Tools",
    description:
      "AI-powered tutoring, progress tracking, and insights for all users.",
  },
  {
    icon: <FiMessageSquare size={26} />,
    title: "Realtime Communication",
    description: "Connect parents, students, and teachers with ease.",
  },
  {
    icon: <FiUsers size={26} />,
    title: "Collaborative Community",
    description: "Interactive forums, group tasks, and peer-based learning.",
  },
  {
    icon: <FaGooglePlay size={26} />,
    title: "Offline Access",
    description:
      "View lessons and homework without internet for better accessibility.",
  },
  {
    icon: <FaAppStoreIos size={26} />,
    title: "Smart Attendance",
    description: "Track, notify, and analyze attendance with real-time alerts.",
  },
];

// Component
export default function Mobile() {
  return (
    <PageWrapper>
        <Topbar/>
        <Header/>
        <MainContent>
      <HeroSection>
        <Title>Explore the MyEducation App</Title>
        <Subtitle>
          A complete learning system with AI, real-time alerts, smart reports,
          and powerful communication tools — all in one mobile app.
        </Subtitle>
        <ButtonGroup>
          <StoreButton
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
          >
            <FaGooglePlay size={20} />
            Play Store
          </StoreButton>
          <StoreButton
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
          >
            <FaAppStoreIos size={20} />
            App Store
          </StoreButton>
        </ButtonGroup>
      </HeroSection>

      <FeatureSection>
        <SectionHeading>App Features</SectionHeading>
        <FeatureGrid>
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <div className="header">
                {f.icon}
                <h3>{f.title}</h3>
              </div>
              <p>{f.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeatureSection>
      </MainContent>
      <Footer/>
    </PageWrapper>
  );
}
