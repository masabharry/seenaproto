import React, { useState } from "react";
import {
  Section,
  Wrapper,
  FormBox,
  InfoText,
  InputBox,
  Input,
  Label,
  Icon,
  Button,
  LogRegLink,
  BgAnimate,
  BgAnimate2,
  Title,
  Paragraph,
  Overlay,
} from "./SharedStyles";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [key, setKey] = useState(0);

  const [animating, setAnimating] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      scale: 0.95,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "left" ? 100 : -100,
      scale: 0.95,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    if (animating) return;

    setAnimating(true);
    setOverlayVisible(true);

    setTimeout(() => {
      setLoginData({ username: "", password: "" });
      setSignupData({ username: "", email: "", password: "" });

      setIsLogin((prev) => !prev);
    }, 600); // switch halfway during cover

    setTimeout(() => {
      setOverlayVisible(false);
      setAnimating(false);
    }, 1200); // after animation ends
  };

  console.log(loginData);
  console.log(signupData);

  return (
    <Section>
      <Wrapper className={isLogin ? "" : "active"} key={key}>
        <BgAnimate />
        <BgAnimate2 />

        {/* {overlayVisible && (
          <Overlay
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.001, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        )} */}

        {/* Login Form */}
        <FormBox className="login">
          <motion.h2
            className="animation"
            style={{
              "--i": 0,
              "--j": 21,
              color: "#fff",
              alignSelf: "center",
              fontSize: "2rem",
            }}
          >
            Login
          </motion.h2>

          <form>
            <InputBox className="animation" style={{ "--i": 1, "--j": 22 }}>
              <Input
                required
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                className={loginData.username ? "filled" : ""}
              />
              <Label>Username</Label>
              <Icon>
                <FaUser />
              </Icon>
            </InputBox>

            <InputBox className="animation" style={{ "--i": 2, "--j": 23 }}>
              <Input
                required
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className={loginData.password ? "filled" : ""}
              />
              <Label>Password</Label>
              <Icon>
                <FaLock />
              </Icon>
            </InputBox>

            <Button className="animation" style={{ "--i": 3, "--j": 24 }}>
              Login
            </Button>

            <LogRegLink className="animation" style={{ "--i": 4, "--j": 25 }}>
              <p>
                Don't have an account?{" "}
                <span onClick={toggleForm} style={{ color: "#7F00FF" }}>
                  Sign Up
                </span>
              </p>
            </LogRegLink>
          </form>
        </FormBox>

        {/* Sign Up Form */}
        <FormBox className="register">
          <motion.h2
            className="animation"
            style={{
              "--i": 17,
              "--j": 0,
              color: "#fff",
              alignSelf: "center",
              fontSize: "2rem",
            }}
          >
            Sign Up
          </motion.h2>
          <form>
            <InputBox className="animation" style={{ "--i": 18, "--j": 1 }}>
              <Input
                required
                type="text"
                name="username"
                value={signupData.username}
                onChange={handleSignupChange}
                className={signupData.username ? "filled" : ""}
              />
              <Label>Username</Label>
              <Icon>
                <FaUser />
              </Icon>
            </InputBox>

            <InputBox className="animation" style={{ "--i": 19, "--j": 2 }}>
              <Input
                required
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                className={signupData.email ? "filled" : ""}
              />
              <Label>Email</Label>
              <Icon>
                <FaEnvelope />
              </Icon>
            </InputBox>

            <InputBox className="animation" style={{ "--i": 20, "--j": 3 }}>
              <Input
                required
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                className={signupData.password ? "filled" : ""}
              />
              <Label>Password</Label>
              <Icon>
                <FaLock />
              </Icon>
            </InputBox>

            <Button className="animation" style={{ "--i": 21, "--j": 4 }}>
              Sign Up
            </Button>

            <LogRegLink className="animation" style={{ "--i": 22, "--j": 5 }}>
              <p>
                Already have an account?{" "}
                <span onClick={toggleForm} style={{ color: "#7F00FF" }}>
                  Login
                </span>
              </p>
            </LogRegLink>
          </form>
        </FormBox>

        {/* Login Info Text */}
        <InfoText className="login">
          <Title className="animation" style={{ "--i": 0, "--j": 20 }}>
            Welcome Back!
          </Title>
          <Paragraph className="animation" style={{ "--i": 1, "--j": 21 }}>
            Empowering Your Vision, Shaping the Future
          </Paragraph>
        </InfoText>

        {/* Sign Up Info Text */}
        <InfoText className="register">
          <Title className="animation" style={{ "--i": 17, "--j": 0 }}>
            Register Now!
          </Title>
          <Paragraph className="animation" style={{ "--i": 18, "--j": 1 }}>
            Empowering Your Vision, Shaping the Future
          </Paragraph>
        </InfoText>
      </Wrapper>
    </Section>
  );
};

export default Login;
