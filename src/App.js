// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './Pages/Homepage';
import PackagePage from './Pages/Packages';
import CommunityDetail from './Pages/CommunityDetail';
import FeatureTour from './Pages/Products/FeatureTour';
import { GlobalStyle } from './App.styles';
import Login from './Components/Login/Login';
import MobileApp from './Pages/Products/MobileApp';
import Contact from './Components/Navigation/Contact';
import ScrollToTop from './Components/ScrollToTop';
import PageWrapper from './Components/PageWrapper';
import Webinars from './Pages/Community/Webinars';
import Feedback from './Pages/Community/Feedback';
import Help from './Pages/Community/Help';
import ActorDetail from './Pages/ActorDetail';
import Vision from './Pages/About/Vision';
import FoundingStory from './Pages/About/FoundingStory';
import Team from './Pages/About/Team';
import Pilots from './Pages/About/Pilots';
import News from './Pages/About/News';
import Join from './Pages/About/Join';
import AboutPage from './Pages/AboutPage';
import MultiCampus from './Pages/Products/MultiCampus';
import StudentIS from './Pages/Products/StudentIS';
import ERPModules from './Pages/Products/ERPModules';
import FAQ from './Pages/Products/FAQ';
import ProductPage from './Pages/ProductPage';
import AIAdvantage from './Pages/AIAdvantage';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="/packages" element={<PageWrapper><PackagePage /></PageWrapper>} />
          <Route path="/community/:type" element={<PageWrapper><CommunityDetail /></PageWrapper>} />
          <Route path="/actors/:type" element={<PageWrapper><ActorDetail /></PageWrapper>} />
          <Route path="/about/:subpage" element={<AboutPage />} />
          <Route path="/product/:subpage" element={<ProductPage />} />
          <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/ai-advantage" element={<PageWrapper><AIAdvantage /></PageWrapper>} />
          <Route path="/community/webinars" element={<PageWrapper><Webinars /></PageWrapper>} />
          <Route path="/community/feedback" element={<PageWrapper><Feedback /></PageWrapper>} />
          <Route path="/community/help" element={<PageWrapper><Help /></PageWrapper>} />
         

        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContent />
    </Router>
  );
};

export default App;
