// pages/AboutPage.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { PageContainer } from '../App.styles';

const AboutPage = () => {
  return (
    <PageContainer>
      <Header />
      <h1>About Us</h1>
      {/* Add about page content here */}
      <Footer />
    </PageContainer>
  );
};

export default AboutPage;