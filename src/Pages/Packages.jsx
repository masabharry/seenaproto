// pages/Pricing.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Topbar from "../Components/Header/Topbar";
import { PageContainer } from "../App.styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#7f00ff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#aaa")};
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.6rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;
`;



const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  position: relative;
`;



const SliderButtonLeft = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  color: #7f00ff;
  border: 1px solid #7f00ff;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #7f00ff;
    color: #fff;
  }

  @media (max-width: 768px) {
    top: 45%;
    left: -25%;
  }

  @media (max-width: 480px) {
    top: 45%;
    left: -20%;
  }
`;

const SliderButtonRight = styled(SliderButtonLeft)`
  left: auto;
  right: 0; 

  @media (max-width: 768px) {
    top: 45%;
    right: -25%;
  }

  @media (max-width: 480px) {
    top: 45%;
    right: -20%;
  }
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
    props.featured ? "0 0 10px rgba(127, 0, 255, 0.3)" : "none"};
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
  const [billing, setBilling] = useState("monthly");

  const [current, setCurrent] = useState(0);




  const plans = [
    {
      title: "Base",
      price: billing === "monthly" ? "$80" : "$800",
      description: "For most businesses that want to optimize web queries.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      button: "Downgrade",
      featured: false,
    },
    {
      title: "Pro",
      price: billing === "monthly" ? "$120" : "$1200",
      description: "For most businesses that want to optimize web queries.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      button: "Upgrade",
      featured: true,
    },
    {
      title: "Enterprise",
      price: billing === "monthly" ? "$260" : "$2600",
      description: "For most businesses that want to optimize web queries.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      button: "Upgrade",
      featured: false,
    },
  ];

 const isMobile = window.innerWidth <= 768;
const visiblePlans = isMobile ? [plans[current]] : plans;

const handleNext = () => {
  setCurrent((prev) => (prev + 1) % plans.length);
};

const handlePrev = () => {
  setCurrent((prev) => (prev - 1 + plans.length) % plans.length);
};

  return (
    <PageContainer>
      <Topbar />
      <Header />
      <Wrapper>
        <Title>Simple, transparent pricing</Title>
        <Subtitle>No contracts. No surprise fees.</Subtitle>

        <ToggleWrapper>
          <ToggleButton
            active={billing === "monthly"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </ToggleButton>
          <ToggleButton
            active={billing === "yearly"}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </ToggleButton>
        </ToggleWrapper>

        <Cards isMobile={isMobile}>
          {visiblePlans.map((plan, i) => (
            <Card
              key={i}
              featured={plan.featured}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
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
          ))}

          {isMobile && (
            <>
              <SliderButtonLeft onClick={handlePrev}>
                <FaChevronLeft />
              </SliderButtonLeft>
              <SliderButtonRight onClick={handleNext}>
                <FaChevronRight />
              </SliderButtonRight>
            </>
          )}
        </Cards>
        
      </Wrapper>
      <Footer />
    </PageContainer>
  );
};

export default Packages;
