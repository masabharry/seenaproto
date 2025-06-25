// pages/Contact.jsx
import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Topbar from "../Header/Topbar";
import { PageContainer } from "../../App.styles";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactWrapper = styled.div`
  padding: 6rem 2rem;
  background: #090909;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #7f00ff;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  width: 90%;
  padding: 4rem 0;
  border-bottom: 1px solid #7f00ff;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(127, 0, 255, 0.3);
    transform: translateY(-10px);
  }

  svg {
    font-size: 2rem;
    color: #7f00ff;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
  }
  a {
    font-size: 0.9rem;
    color: #ccc;
    text-decoration: none;
    word-break: break-word;
    padding: 0.5rem 0;
    &:hover {
      color: #7f00ff;
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const Form = styled.form`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    background: #111;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1rem;
    color: white;
    font-size: 1rem;
    resize: none;

    &:focus {
      outline: none;
      border-color: #7f00ff;
    }
  }

  button {
    background: #7f00ff;
    border: none;
    padding: 0.9rem;
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #a855f7;
    }
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Topbar />
      <Header />
      <ContactWrapper>
        <Title>Contact Our Team</Title>
        <CardGrid>
          <Card>
            <FiPhone />
            <h3>Call Us</h3>
            <p>Speak with our Assistance</p>
            <a href="tel:+923121234567">+92 312 1234567</a>
          </Card>
          {/* <Card>
            <FiMail />
            <h3>Email</h3>
            <p>Send us Email</p>
            <a href="mailto:support@seenadsaviour.com">
              support@seenadsaviour.com
            </a>
          </Card>
          <Card>
            <FiMapPin />
            <h3>Office</h3>
            <p>Visit our office</p>
            <a
              href="https://maps.app.goo.gl/53mp3FPfCjkpmmqU8"
              target="_blank"
              rel="noopener noreferrer"
            >
              DHA Phase II, Islamabad, Pakistan
            </a>
          </Card> */}
        </CardGrid>
        <ContactForm>
          <Form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </Form>
        </ContactForm>
      </ContactWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Contact;
