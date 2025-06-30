import React from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {
  FiHelpCircle,
  FiUsers,
  FiBook,
  FiMail,
  FiShield,
  FiUser,
} from "react-icons/fi";

const PageWrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  &:hover {
    color: #7f00ff;
  }
`;

const Subtitle = styled.p`
  color: #bbb;
  font-size: 1.2rem;
  max-width: 600px;
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
`;

const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Card = styled.div`
  background: #111;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #222;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
  }
`;

const CardTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDetail = styled.p`
  color: #aaa;
  font-size: 0.95rem;
`;

const Button = styled.a`
  display: inline-block;
  background: transparent;
  color: #7f00ff;
  padding: 0.75rem 1.5rem;
  border: 1px solid #7f00ff;
  border-radius: 8px;
  margin-top: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: #7f00ff;
    color: white;
  }

  &.primary {
    background: #7f00ff;
    color: white;
    &:hover {
      background: #6600ff;
    }
  }
`;

const Help = () => {
  const roles = [
    {
      icon: <FiUser />,
      title: "For Students",
      detail: "What students will be able to do inside our smart education app.",
    },
    {
      icon: <FiBook />,
      title: "For Teachers",
      detail:
        "How teachers can plan lessons, grade faster, and track performance using AI.",
    },
    {
      icon: <FiShield />,
      title: "For Principals",
      detail:
        "Manage school progress, staff activity, and receive real-time reports.",
    },
    {
      icon: <FiUsers />,
      title: "For Parents",
      detail:
        "Parents will stay connected with weekly AI summaries and attendance alerts.",
    },
  ];

  const faqs = [
    {
      question: "When will the app be available?",
      answer:
        "We're aiming for a public beta in the next few months. Join our community to get early access.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "Nope! Everything runs in your browser or mobile app. We'll support Android first.",
    },
    {
      question: "Is this free to use?",
      answer:
        "Yes — core features will be free for all schools. Premium features may be added later.",
    },
  ];

  return (
    <PageWrapper>
      <Topbar />
      <Header />

      <Hero>
        <Title>Help Center & Docs</Title>
        <Subtitle>
          Everything you need to understand how our app will work — and how you can help shape it.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>📚 Explore by Role</SectionTitle>
        <CardGrid>
          {roles.map((role, i) => (
            <Card key={i}>
              <CardTitle>{role.icon} {role.title}</CardTitle>
              <CardDetail>{role.detail}</CardDetail>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>❓ Frequently Asked Questions</SectionTitle>
        <CardGrid>
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardTitle>{faq.question}</CardTitle>
              <CardDetail>{faq.answer}</CardDetail>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>💬 Still Need Help?</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle><FiHelpCircle /> Ask Us Directly</CardTitle>
            <CardDetail>Email us any time at <strong>support@seenadsaviour.com</strong></CardDetail>
          </Card>
          <Card>
            <CardTitle><FiUsers /> Join the Beta Community</CardTitle>
            <CardDetail>Ask questions, see updates, and vote on features before launch.</CardDetail>
            <Button href="/community">Join Now</Button>
          </Card>
        </CardGrid>
      </Section>

      {/* <Section>
        <div
          style={{
            background: "transparent",
            border: "1px solid #7f00ff",
            padding: "3rem 2rem",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#7f00ff" }}>
            Join the Mission to Rebuild Education
          </h2>
          <p style={{ margin: "1rem auto", maxWidth: "600px" }}>
            Be part of a smart system built for every student, teacher, and school. Start now.
          </p>
          <Button className="primary" href="/community/feedback">
            Give Early Feedback
          </Button>
        </div>
      </Section> */}

      <Footer />
    </PageWrapper>
  );
};

export default Help;
