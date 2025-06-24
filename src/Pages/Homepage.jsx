// pages/HomePage.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import { PageContainer } from '../App.styles';
import Topbar from '../Components/Header/Topbar';
import { ClothBackground } from '../Components/ClothBackground';
import { BackgroundWrapper } from '../Components/Hero/Hero.styles';
import Features from '../Components/Homecomponents/Features';
import Highlight from '../Components/Homecomponents/Highlight';
import Testimonials from '../Components/Homecomponents/Testimonials';

const HomePage = () => {
  return (
    <PageContainer>
      <BackgroundWrapper>
         <ClothBackground/> 
      </BackgroundWrapper>
     
      <Topbar/>
      <Header />
      <Hero />
      <Features/>
      <Highlight />
      <Testimonials/>
      <Footer />

    </PageContainer>
  );
};

export default HomePage;