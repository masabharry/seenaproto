// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import PackagePage from './Pages/Packages';
import CommunityPage from './Pages/CommunityPage';
import FeatureTour from './Pages/Products/FeatureTour';
import { GlobalStyle } from './App.styles';
import Login from './Components/Login/Login';
import MobileApp from './Pages/Products/MobileApp';
import Contact from './Components/Navigation/Contact';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/community" element={<CommunityPage />} /> 
        <Route path="/product/feature-tour" element={<FeatureTour />} /> 
        <Route path="/product/mobile-app" element={<MobileApp />} /> 
        <Route path="/contact-us" element={<Contact />} /> 
        
      </Routes>
    </Router>
  );
};

export default App;