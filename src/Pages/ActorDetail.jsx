import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  FiUser,
  FiBookOpen,
  FiSettings,
  FiUsers,
  FiAward,
  FiActivity,
} from "react-icons/fi";
import Topbar from "../Components/Header/Topbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const actorData = {
  student: {
    title: "Student Dashboard",
    description: "Empowering students with gamified learning, progress tracking, and smart goals.",
    icon: <FiUser />,
    bg: "#0d1a2b",
    modules: [
      "Smart Timetable",
      "AI Homework Help",
      "Gamified Learning",
      "Progress Reports",
      "Virtual Classrooms",
      "Attendance Alerts",
    ],
  },
  teacher: {
    title: "Teacher Dashboard",
    description: "Plan lessons faster, track class performance, and collaborate with parents using AI tools.",
    icon: <FiBookOpen />,
    bg: "#14001e",
    modules: [
      "Lesson Planner",
      "Performance Tracking",
      "Student Reports",
      "Attendance Automation",
      "Homework Review AI",
    ],
  },
  principal: {
    title: "Principal Insights",
    description: "Oversee school performance, manage staff, and monitor learning effectiveness.",
    icon: <FiSettings />,
    bg: "#1a001f",
    modules: [
      "Staff Dashboard",
      "AI Progress Insights",
      "Approval Systems",
      "Role Management",
      "Incident Alerts",
    ],
  },
  admin: {
    title: "Admin Control Panel",
    description: "Manage system users, settings, school info, and technical configurations.",
    icon: <FiSettings />,
    bg: "#111",
    modules: [
      "User Roles",
      "School Setup",
      "Data Backup",
      "System Preferences",
      "Audit Logs",
    ],
  },
  owner: {
    title: "Director/Owner View",
    description: "Monitor overall school growth, revenue, and long-term AI impact analytics.",
    icon: <FiAward />,
    bg: "#090909",
    modules: [
      "Revenue Insights",
      "Growth Charts",
      "School Comparisons",
      "AI Performance Reports",
    ],
  },
  parents: {
    title: "Parent Portal",
    description: "Stay informed with AI-powered weekly updates, progress summaries, and alerts.",
    icon: <FiUsers />,
    bg: "#001313",
    modules: [
      "Weekly AI Reports",
      "Attendance Notifications",
      "Messaging with Teachers",
      "View Timetable",
      "Learning Suggestions",
    ],
  },
  community: {
    title: "Community Engagement",
    description: "Join our evolving community to co-create the future of education.",
    icon: <FiActivity />,
    bg: "#1f001a",
    modules: [
      "Webinars & Meetups",
      "Feedback Channel",
      "Early Access Features",
      "Support Center",
    ],
  },
};

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem;
  margin: 5rem auto;
  width: 70%;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #7f00ff;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #7f00ff;
  margin-bottom: 2rem;
`;

const ModuleGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const ModuleCard = styled.div`
  background: #111;
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid #222;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #7f00ff;
  }
`;

const ActorDetail = () => {
  const { type } = useParams();
  const actor = actorData[type?.toLowerCase()];

  if (!actor) {
    return (
      <PageWrapper>
        <Topbar />
        <Header />
        <Hero>
          <Title>Role Not Found</Title>
          <Subtitle>We couldn’t find this actor in our system. Please check the URL.</Subtitle>
        </Hero>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <IconWrapper>{actor.icon}</IconWrapper>
        <Title>{actor.title}</Title>
        <Subtitle>{actor.description}</Subtitle>
      </Hero>

      <Section>
        <SectionTitle>🚀 Modules & Features</SectionTitle>
        <ModuleGrid>
          {actor.modules.map((mod, idx) => (
            <ModuleCard key={idx}>{mod}</ModuleCard>
          ))}
        </ModuleGrid>
      </Section>

      <Footer />
    </PageWrapper>
  );
};

export default ActorDetail;
