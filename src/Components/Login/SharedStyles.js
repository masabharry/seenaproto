import styled from "styled-components";
import { motion } from "framer-motion";

// Updated Color Palette
const themeColor = "#090909";       // Replacing previous purple
const highlightFill = "#7F00FF";    // Subtle contrast fill

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  height: 450px;
  background: transparent;
  border: 2px solid ${highlightFill};
  box-shadow: 0 0 15px ${highlightFill};
  overflow: hidden;
  transition: 1s;

  &.active .form-box.login,
  &.active .info-text.login {
    transform: translateX(-120%);
    opacity: 0;
    filter: blur(10px);
  }
  &.active .form-box.register,
  &.active .info-text.register {
    pointer-events: auto;
    transform: translateX(0);
    opacity: 1;
    filter: blur(0px);
  }
    @media (max-width: 768px) {
    width: 90%;
    height: 400px;

    }
`;

export const FormBox = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  
  &.register {
    right: 0;
    transform: translateX(120%);
    pointer-events: none;
    transition: 0.7s ease;
  }

  &.login {
    left: 0;
    transform: translateX(0%);
    pointer-events: auto;
    transition: 0.7s ease;
  }

  ${Wrapper}.active &.login {
    transform: translateX(-120%);
    pointer-events: none;
  }

  ${Wrapper}.active &.register {
    transform: translateX(0%);
    pointer-events: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0 30px;

  }

`;

export const InfoText = styled.div`
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  
  &.register {
    left: 0;
    transform: translateX(-120%);
    pointer-events: none;
    transition: 0.7s ease;
  }

  &.login {
    right: 0;
    transform: translateX(0%);
    pointer-events: auto;
    transition: 0.7s ease;
  }

  ${Wrapper}.active &.login {
    transform: translateX(120%);
    pointer-events: none;
  }

  ${Wrapper}.active &.register {
    transform: translateX(0%);
    pointer-events: auto;
  }
    @media (max-width: 768px) {
      display:none;
    }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 25px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  color: white;
  font-size: 16px;
  padding-right: 25px;
  color: ${highlightFill};
  &:focus,
  &:valid {
    border-bottom-color: ${highlightFill};
  }
  @media (max-width: 768px) {
    font-size: 14px;
    border-bottom-color: #fff;!important;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 20%;
  left: 0;
  transform: translateY(50%);
  font-size: 12px;
  color: white;
  pointer-events: none;
  transition: 0.5s;

  ${Input}:focus ~ &,
  ${Input}:valid ~ & {
    top: -10px;
    color: ${highlightFill};
  }
  @media (max-width: 768px) {
    ${Input}:valid ~ & {
    top: -2px;
    color: '#fff';
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: white;
  font-size: 18px;
  // color: ${highlightFill};
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border: 2px solid ${themeColor};
  background: transparent;
  color: white;
  font-weight: 600;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover::before {
    top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 300%;
    background: linear-gradient(45deg, #000, ${highlightFill});
    z-index: -1;
    transition: 0.5s;
  }
`;

export const LogRegLink = styled.div`
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 20px 0;

  span {
    color: ${themeColor};
    cursor: pointer;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BgAnimate = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
  width: 850px;
  height: 600px;
  background: ${highlightFill};
  border-bottom: 3px solid ${themeColor};
  transform: rotate(10deg) skewY(40deg);
  transform-origin: bottom right;
  transition: 1.5s ease;
  transition-delay: 1.6s;

  ${Wrapper}.active & {
    transform: rotate(0) skewY(0);
    transition-delay: 0.5s;
  }
`;

export const BgAnimate2 = styled.div`
  position: absolute;
  top: 100%;
  left: 250px;
  width: 850px;
  height: 700px;
  background: ${themeColor};
  border-top: 3px solid ${themeColor};
  transform: rotate(0deg) skewY(0deg);
  transform-origin: bottom left;
  transition: 1.5s ease;
  transition-delay: 0.5s;

  ${Wrapper}.active & {
    transform: rotate(-11deg) skewY(-41deg);
    transition-delay: 1.2s;
  }
`;


export const Title = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: white;
`;

