import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "../../Components/Header/Topbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: #7f00ff;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`;

const Answer = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.5;
`;

const faqs = [
  {
    question: "What is SDS and who is it for?",
    answer:
      "SDS (SeenadSaviour) is a next-gen school information & management system designed for schools, colleges, academies, and hybrid institutions. It helps automate operations, engage students, and empower educators using AI.",
  },
  {
    question: "Can I manage multiple campuses or institutions?",
    answer:
      "Yes! SDS supports multi-campus and multi-institution management with dedicated roles, modules, and dashboards for each type.",
  },
  {
    question: "Is SDS cloud-based or offline?",
    answer:
      "SDS is a cloud-first platform. That means it's accessible from anywhere, anytime — with automatic updates and no installation hassle.",
  },
  {
    question: "Do students or parents get login access?",
    answer:
      "Yes! Students and parents get smart dashboards to view attendance, performance, schedules, fees, and more.",
  },
  {
    question: "Can we customize the modules?",
    answer:
      "Absolutely. You can enable only the modules you need — whether it's exams, fee management, or a full ERP suite.",
  },
  {
    question: "What support do you provide during setup?",
    answer:
      "We provide complete onboarding, training, and live chat support to ensure smooth implementation at your institution.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <PageWrapper>
      <Topbar />
      <Header />
      <Hero>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>
          Get quick answers to the most common questions about SDS.
        </Subtitle>
      </Hero>

      <Section>
        {faqs.map((faq, i) => (
          <FAQItem key={i} onClick={() => toggle(i)}>
            <Question>
              {faq.question}
              {openIndex === i ? <FiChevronUp /> : <FiChevronDown />}
            </Question>
            {openIndex === i && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </Section>

      <Footer />
    </PageWrapper>
  );
};

export default FAQ;
