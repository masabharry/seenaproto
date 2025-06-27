// pages/Pricing.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Topbar from "../Components/Header/Topbar";
import { PageContainer } from "../App.styles";

const Wrapper = styled.div`
  padding: 6rem 2rem;
  background: #090909;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #fff;
`;

const Subtitle = styled.p`
  color: #aaa;
  font-size: 1rem;
  margin-bottom: 2.5rem;
`;

const ToggleWrapper = styled.div`
  background: #111;
  border-radius: 30px;
  display: inline-flex;
  padding: 0.4rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;

  @media (max-width: 480px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 0.6rem 1rem;
    gap: 0.6rem;
    background: #1a1a1a;
    border-radius: 16px;
  }
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#7f00ff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#ccc")};
  // border: 1px solid ${(props) => (props.active ? "#7f00ff" : "#333")};
  border: none;
  border-radius: 24px;
  padding: 0.6rem 1.6rem;

  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #7f00ff;
    color: #fff;
    border-color: #7f00ff;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    flex: 1 1 auto;
    min-width: 42%;
    text-align: center;
  }
`;




// const Cards = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Card = styled(motion.div)`
  background: #111;
  border-radius: 16px;
  padding: 2.5rem;
  width: 280px;
  text-align: center;
  color: white;
  border: 1px solid #222;
  box-shadow: ${(props) =>
    props.featured ? "0 0 5px rgba(127, 0, 255, 0.3)" : "none"};
`;

const Price = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.3rem;
`;

const Plan = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => (props.featured ? "#7f00ff" : "#fff")};
`;

const Desc = styled.p`
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 2rem;
  li {
    margin-bottom: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    &::before {
      content: "✔";
      color: #7f00ff;
    }
  }
`;

const Button = styled.button`
  background: ${(props) => (props.outlined ? "transparent" : "#7f00ff")};
  color: ${(props) => (props.outlined ? "#7f00ff" : "#fff")};
  border: 1px solid #7f00ff;
  border-radius: 30px;
  padding: 0.8rem 1.6rem;
  width: 100%;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.outlined ? "#7f00ff" : "#a855f7")};
    color: #fff;
  }
`;

const Packages = () => {
  const [selectedPlan, setSelectedPlan] = useState("simple");

  const plans = [
    {
      key: "simple",
      title: "SDS Simple",
      price: "$29",
      description: "Essential tools for getting started.",
      features: [
        "Basic analytics",
        "Email support",
        "1 user only",
        "Limited features",
        "Community access",
      ],
      button: "Choose Simple",
      featured: false,
    },
    {
      key: "standard",
      title: "SDS Standard",
      price: "$59",
      description: "Perfect for small teams and growing projects.",
      features: [
        "Advanced analytics",
        "Priority email support",
        "5 team members",
        "All simple features",
        "Basic integrations",
      ],
      button: "Choose Standard",
      featured: false,
    },
    {
      key: "pro",
      title: "SDS Pro",
      price: "$119",
      description: "Powerful tools for power users and businesses.",
      features: [
        "Unlimited analytics",
        "24/7 support",
        "Unlimited team members",
        "Custom integrations",
        "Automation tools",
      ],
      button: "Choose Pro",
      featured: true,
    },
    {
      key: "platinum",
      title: "SDS Platinum Pro",
      price: "$299",
      description: "All-inclusive plan with enterprise-level features.",
      features: [
        "Dedicated support",
        "Custom solutions",
        "Unlimited everything",
        "Onboarding specialist",
        "Private infrastructure",
      ],
      button: "Choose Platinum",
      featured: true,
    },
  ];

  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const isWideScreen = screenWidth > 1080;

  const selectedIndex = plans.findIndex((p) => p.key === selectedPlan);

  return (
    <PageContainer>
      <Topbar />
      <Header />
      <Wrapper>
        <Title>Simple, transparent pricing</Title>
        <Subtitle>No contracts. No surprise fees.</Subtitle>

        <ToggleWrapper>
          {plans.map((plan) => (
            <ToggleButton
              key={plan.key}
              active={selectedPlan === plan.key}
              onClick={() => setSelectedPlan(plan.key)}
            >
              {plan.title}
            </ToggleButton>
          ))}
        </ToggleWrapper>

        <Cards style={{ perspective: "1200px" }}>
          {plans.map((plan, index) => {
            // Hide all except selected card on mobile
            if (!isWideScreen && plan.key !== selectedPlan) return null;

            let distance = index - selectedIndex;

            // Card animation position logic
            let styleProps = {
              scale: 0.85,
              opacity: 0.3,
              zIndex: 0,
              x: distance * 220,
            };

            if (distance === 0) {
              styleProps = {
                scale: 1,
                opacity: 1,
                zIndex: 2,
                x: 0,
              };
            } else if (Math.abs(distance) === 1) {
              styleProps.opacity = 0.6;
              styleProps.zIndex = 1;
              styleProps.scale = 0.9;
            } else {
              return null; // Don't show cards beyond ±1 on widescreen
            }

            return (
              <Card
                key={plan.key}
                featured={distance === 0 && plan.featured}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  x: styleProps.x,
                  opacity: styleProps.opacity,
                  scale: styleProps.scale,
                  zIndex: styleProps.zIndex,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  transformStyle: "preserve-3d",
                  pointerEvents: distance === 0 ? "auto" : "none",
                  boxShadow:
                    distance === 0
                      ? "0 0 25px rgba(127, 0, 255, 0.3)"
                      : "none",
                }}
              >
                <Price>
                  {plan.price}
                  <span style={{ fontSize: "0.9rem" }}>/month</span>
                </Price>
                <Plan featured={plan.featured}>{plan.title}</Plan>
                <Desc>{plan.description}</Desc>
                <FeatureList>
                  {plan.features.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </FeatureList>
                <Button outlined={!plan.featured}>{plan.button}</Button>
              </Card>
            );
          })}
        </Cards>
      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default Packages;
