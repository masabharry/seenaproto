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
          <Route path="/product/feature-tour" element={<PageWrapper><FeatureTour /></PageWrapper>} />
          <Route path="/product/mobile-app" element={<PageWrapper><MobileApp /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />
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
