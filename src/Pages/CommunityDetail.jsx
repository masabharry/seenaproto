import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header/Header';
import Topbar from '../Components/Header/Topbar';
import Footer from '../Components/Footer/Footer';
import { PageContainer } from '../App.styles';
import {
  FiUsers,
  FiUser,
  FiShield,
  FiBook,
  FiCpu,
  FiGlobe,
  FiBarChart2,
  FiMessageCircle,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';

const communityData = {
  principal: {
    title: 'Principal Community',
    tagline: 'Lead with Insight. Transform Your School with AI.',
    icon: <FiShield />,
    bg: '#14001e',
  },
  teacher: {
    title: 'Teacher Community',
    tagline: 'Teach Smarter. Engage Deeper. Elevate Learning.',
    icon: <FiBook />,
    bg: '#0d1a2b',
  },
  student: {
    title: 'Student Community',
    tagline: 'Smart Tools. Smarter Learning. Limitless Growth.',
    icon: <FiUsers />,
    bg: '#001313',
  },
  private: {
    title: 'Private Community',
    tagline: 'Early Access. Exclusive Features. Personal AI Assistants.',
    icon: <FiUser />,
    bg: '#1a001f',
  },
};

const benefitCards = [
  {
    icon: <FiCpu />,
    title: 'AI Progress Tracking',
    description:
      'Get smart, real-time insights into performance trends, weak areas, and growth metrics personalized to each user.',
    result: 'Helps you take action before problems arise.',
  },
  {
    icon: <FiGlobe />,
    title: 'Global Collaboration',
    description:
      'Connect with students, teachers, or administrators across schools, regions, or even countries.',
    result: 'Breaks boundaries and inspires innovation.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Smart Dashboards',
    description:
      'Beautiful dashboards for students, teachers, and principals with actionable data visualized.',
    result: 'Informed decisions at every level.',
  },
  {
    icon: <FiMessageCircle />,
    title: 'AI-Powered Discussions',
    description:
      'Ask, discuss, and explore topics using AI-powered chatrooms that guide meaningful conversations.',
    result: 'Boosts engagement and curiosity.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Skill-Based Learning Paths',
    description:
      'AI recommends personalized paths for students based on interests and future-ready skills.',
    result: 'Learn what matters most to your goals.',
  },
  {
    icon: <FiZap />,
    title: 'Instant Recommendations',
    description:
      'From lesson plans to leadership strategies—get instant, context-aware suggestions powered by AI.',
    result: 'Saves hours every week.',
  },
];

const Wrapper = styled.div`
  padding: 6rem 2rem 4rem;
  background: #090909;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #aaa;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const BenefitCard = styled.div`
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  text-align: left;
  // box-shadow: 0 0 20px rgba(127, 0, 255, 0.12);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 15px rgba(127, 0, 255, 0.25);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  color: #7f00ff;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const BenefitDesc = styled.p`
  color: #bbb;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const BenefitResult = styled.p`
  color: #888;
  font-size: 0.85rem;
  font-style: italic;
`;

const CommunityDetail = () => {
  const { type } = useParams();
  const content = communityData[type?.toLowerCase()] || communityData['student'];

  return (
    <PageContainer>
      <Topbar />
      <Header />
      <Wrapper>
        <Intro>
          <IconWrapper>{content.icon}</IconWrapper>
          <Title>{content.title}</Title>
          <Tagline>{content.tagline}</Tagline>
        </Intro>

        <CardsGrid>
          {benefitCards.map((card, i) => (
            <BenefitCard key={i}>
              <BenefitIcon>{card.icon}</BenefitIcon>
              <BenefitTitle>{card.title}</BenefitTitle>
              <BenefitDesc>{card.description}</BenefitDesc>
              <BenefitResult>{card.result}</BenefitResult>
            </BenefitCard>
          ))}
        </CardsGrid>
      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default CommunityDetail;
