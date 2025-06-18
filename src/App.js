// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ProductPage from './Pages/ProductPage';
import AboutPage from './Pages/AboutPage';
import ActorsPage from './Pages/ActorsPage';
import CommunityPage from './Pages/CommunityPage';
import { GlobalStyle } from './App.styles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/community" element={<CommunityPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;