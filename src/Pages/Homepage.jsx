// pages/HomePage.jsx
import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import { PageContainer } from '../App.styles';
import Topbar from '../Components/Header/Topbar';
import { ClothBackground } from '../Components/ClothBackground';
import { BackgroundWrapper } from '../Components/Hero/Hero.styles';

const HomePage = () => {
  return (
    <PageContainer>
      <BackgroundWrapper>
         <ClothBackground/>
         
      </BackgroundWrapper>
     
      <Topbar/>
      <Header />
      <Hero />
      <Footer />

    </PageContainer>
  );
};

export default HomePage;